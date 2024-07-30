const sharp = require('sharp');

const CLAUDE_IMAGE_MAX_SIZE = 5 * 1024 * 1024;
const CLAUDE_MAX_IMAGE_DIMENSION = 7990;

async function processImage(mediaType, base64Data) {
  // Extract bytes and media type from base64 data URL

  const imageBuffer = Buffer.from(base64Data, 'base64');

  let img = sharp(imageBuffer);
  const metadata = await img.metadata();

  // Check if image is under max dimensions and size
  const isUnderDimensionLimit =
    metadata.width < CLAUDE_MAX_IMAGE_DIMENSION &&
    metadata.height < CLAUDE_MAX_IMAGE_DIMENSION;
  const isUnderSizeLimit = imageBuffer.length <= CLAUDE_IMAGE_MAX_SIZE;

  // If image is under both limits, no processing needed
  if (isUnderDimensionLimit && isUnderSizeLimit) {
    console.log('[CLAUDE IMAGE PROCESSING] no processing needed');
    return [mediaType, base64Data];
  }

  // Time image processing
  const startTime = Date.now();

  // Resize image if needed
  if (!isUnderDimensionLimit) {
    const aspectRatio = metadata.width / metadata.height;
    let newWidth, newHeight;

    if (metadata.width > metadata.height) {
      newWidth = CLAUDE_MAX_IMAGE_DIMENSION;
      newHeight = Math.round(CLAUDE_MAX_IMAGE_DIMENSION / aspectRatio);
    } else {
      newHeight = CLAUDE_MAX_IMAGE_DIMENSION;
      newWidth = Math.round(CLAUDE_MAX_IMAGE_DIMENSION * aspectRatio);
    }

    img = img.resize(newWidth, newHeight);
    console.log(
      `[CLAUDE IMAGE PROCESSING] image resized: width = ${newWidth}, height = ${newHeight}`
    );
  }

  // Convert and compress as JPEG
  let quality = 95;
  let output = await img.jpeg({ quality }).toBuffer();

  // Reduce quality until image is under max size
  while (output.length > CLAUDE_IMAGE_MAX_SIZE && quality > 10) {
    quality -= 5;
    output = await img.jpeg({ quality }).toBuffer();
  }

  // Log so we know it was modified
  const oldSize = imageBuffer.length;
  const newSize = output.length;
  console.log(
    `[CLAUDE IMAGE PROCESSING] image size updated: old size = ${oldSize} bytes, new size = ${newSize} bytes`
  );

  const endTime = Date.now();
  const processingTime = (endTime - startTime) / 1000;
  console.log(
    `[CLAUDE IMAGE PROCESSING] processing time: ${processingTime.toFixed(
      2
    )} seconds`
  );

  return ['image/jpeg', output.toString('base64')];
}

module.exports = { processImage };
