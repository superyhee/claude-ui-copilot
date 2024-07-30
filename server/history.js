const fs = require('fs').promises;
const path = require('path');
const { execSync } = require('child_process');

const { getDefaultUIContent } = require('./utils/utils');

const isDockerEnv = process.env.IS_DOCKER_ENV === 'true';

const codeFilePath = path.join(
  __dirname,
  isDockerEnv ? './src/components' : '../frontend/src/components',
  'PreviewPage.jsx'
);

const readCode = async (ui) => {
  try {
    return await fs.readFile(codeFilePath, 'utf8');
  } catch (error) {
    console.error(`Error reading file: ${error.message}`);
    return getDefaultUIContent(ui);
  }
};

const writeCode = async (code) => {
  try {
    await fs.writeFile(codeFilePath, code, { encoding: 'utf8', flag: 'w' });
    console.log(`Code written to: ${codeFilePath}`);
    return code;
  } catch (error) {
    console.error(`Error writing file: ${error.message}`);
  }
};

const initCode = (ui) => {
  return writeCode(getDefaultUIContent(ui));
};

const executeGitCommand = (command) => {
  try {
    return execSync(command).toString().trim();
  } catch (error) {
    console.error(`Error executing Git command: ${error.message}`);
    return '';
  }
};

const getHistory = () => {
  const logCommand = `git log --pretty=format:'%h %ad %s' --date=format:'%Y-%m-%d %H:%M' -- ${codeFilePath}`;
  const history = executeGitCommand(logCommand).split('\n');
  return history
    .map((item) => {
      const match = item.match(/^(\w+)\s([\d-]+\s[\d:]+)\s(.*)$/);
      return match
        ? {
            commitHash: match[1],
            commitDate: match[2],
            commitMessage: match[3]
          }
        : null;
    })
    .filter(Boolean);
};

const getHistoryFile = (commitHash) => {
  const innerCodeFilePath = path.join(
    isDockerEnv ? './src/components' : '../frontend/src/components',
    'PreviewPage.jsx'
  );
  const showCommand = `git show ${commitHash}:${innerCodeFilePath}`;
  return executeGitCommand(showCommand);
};

const autoCommit = async (commitMessage) => {
  const innerCodeFilePath = path.join(
    isDockerEnv ? './src/components' : '../frontend/src/components',
    'PreviewPage.jsx'
  );
  try {
    executeGitCommand(`git add ${innerCodeFilePath}`);
    executeGitCommand(`git commit -m "${commitMessage}"`);
  } catch (error) {
    throw new Error(`Failed to commit changes: ${error.message}`);
  }
};

module.exports = {
  readCode,
  writeCode,
  getHistory,
  getHistoryFile,
  autoCommit,
  initCode
};
