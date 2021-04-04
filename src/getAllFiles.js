const fs = require('fs');
const path = require('path');
const { FILES_TO_IGNORE } = require('../constants/defaultIgnoreFiles');
const { INVALID_PATH } = require('../constants/defaultErrorMsg');

const getAllFiles = (dir) => {
  try {
    fs.existsSync(dir);

    let fileList = [];
    const filesInDir = fs.readdirSync(dir);

    filesInDir.forEach((file) => {
      if (!FILES_TO_IGNORE.includes(file)) {
        const filePath = path.join(dir, file);
        const stat = fs.lstatSync(filePath);
        const isDirectory = stat.isDirectory();

        if (isDirectory) {
          const nestedFiles = getAllFiles(filePath);
          fileList = [...fileList, ...nestedFiles];
        } else {
          fileList = [...fileList, filePath];
        }
      }
    });

    return fileList;
  } catch (err) {
    return INVALID_PATH;
  }
};

module.exports = {
  getAllFiles,
};
