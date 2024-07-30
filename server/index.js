const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs').promises;
const cors = require('cors');
const { processImage } = require('./utils/claudeImageProcessor');
const { AnthropicBedrock } = require('@anthropic-ai/bedrock-sdk');
const { Anthropic } = require('@anthropic-ai/sdk');
require('dotenv').config();
const {
  readCode,
  writeCode,
  getHistory,
  getHistoryFile,
  autoCommit,
  initCode
} = require('./history');
const { getDefaultUIContent: getUITemplate } = require('./utils/utils');
const {
  getDetailedPrompt: getPrompt,
  getSystemPrompt
} = require('./utils/prompts');

const EventEmitter = require('events');
const uuid = require('uuid');
EventEmitter.prototype._maxListeners = 0;
const app = express();
const emitter = new EventEmitter();

const bedrockClient = new AnthropicBedrock(
  (aws_access_key = process.env.AWS_ACCESS_KEY_ID),
  (aws_secret_key = process.env.AWS_SECRET_ACCESS_KEY),
  (aws_region = process.env.AWS_REGION)
);
const anthropicClient = new Anthropic(
  (api_key = process.env.ANTHROPIC_API_KEY)
);
const upload = multer({ dest: 'uploads/' });

app.use(bodyParser.json());
app.use(cors());

const handleFileUpload = async (files) => {
  if (!files || files.length === 0) return [];

  return Promise.all(
    files.map(async (file) => {
      const fileData = await fs.readFile(file.path);
      const base64 = fileData.toString('base64');
      // 调用processImage函数
      const [processedMediaType, processedBase64] = await processImage(
        file.mimetype,
        base64
      );
      await fs.unlink(file.path);
      return {
        type: 'image',
        source: {
          type: 'base64',
          media_type: processedMediaType,
          data: processedBase64
        }
      };
    })
  );
};

const generateCode = async (req, res) => {
  const { template, prompt, model, top_k, top_p, temperature, provider } =
    req.body;
  try {
    console.log(template, prompt, model, top_k, top_p, temperature, provider);
    const hasFile = req.files?.length > 0;
    const currentCode = await readCode(template);
    const uiTemplate = getUITemplate(template);
    const myPrompt = hasFile
      ? 'Make sure the page looks exactly like the screenshot,match the colors,sizes exactly.'
      : prompt;
    const detailedPrompt = getPrompt(currentCode, myPrompt);
    const content = await handleFileUpload(req.files);
    content.push({ type: 'text', text: detailedPrompt });
    let code = '';
    sendMessage('chats', 'starting');
    let client = provider === 'Bedrock' ? bedrockClient : anthropicClient;
    const stream = await client.messages.create({
      model,
      system: getSystemPrompt(hasFile, template, uiTemplate),
      temperature: parseFloat(temperature),
      top_p: parseFloat(top_p),
      top_k: parseInt(top_k, 10),
      max_tokens: 4096,
      messages: [{ role: 'user', content }],
      stream: true
    });

    for await (const messageStreamEvent of stream) {
      if (messageStreamEvent.type === 'content_block_delta') {
        const text = messageStreamEvent.delta.text;
        code += text;
        sendMessage('chats', text);
      }
    }
    sendMessage('chats', 'ending');
    const updatedCode = code.replace(/```jsx|```/g, '').trim();
    await writeCode(updatedCode);
    await autoCommit(`${myPrompt}`);
    res.json({ success: true, code: updatedCode });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
};

const sendMessage = (channel, message) => {
  emitter.emit('push', channel, { value: message });
};

app.get('/sse', (req, res) => {
  console.log('connect sse');
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    Connection: 'keep-alive'
  });

  const listener = (event, data) => {
    // res.write(`id: ${uuid.v4()}\n`);
    res.write(`event: ${event}\n`);
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  };

  emitter.addListener('push', listener);

  req.on('close', () => {
    emitter.removeListener('push', listener);
  });
});

app.post('/generate-code', upload.array('images'), generateCode);

app.get('/get-code', async (req, res) => {
  try {
    const code = await readCode();
    res.json({ code });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.post('/update-code', async (req, res) => {
  try {
    await writeCode(req.body.code);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get('/get-history', async (req, res) => {
  try {
    const history = await getHistory();
    res.json({ history });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get('/get-history-file/:commitHash', async (req, res) => {
  try {
    const fileContent = await getHistoryFile(req.params.commitHash);
    res.json({ fileContent });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.post('/new-page', async (req, res) => {
  try {
    const code = await initCode(req.body.ui);
    res.json({ success: true, code });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
