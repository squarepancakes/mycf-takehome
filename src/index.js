const fs = require('fs');
const path = require('path');

const getAllFiles = (dir) => {
  const directoryExists = fs.existsSync(dir);
  if (!directoryExists) {
    return 'No such directory';
  }

  let fileList = [];
  const filesInDir = fs.readdirSync(dir);

  filesInDir.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.lstatSync(filePath);
    const isDirectory = stat.isDirectory();

    // recursively add to the array
    if (isDirectory) {
      const nestedFiles = getAllFiles(filePath);
      fileList = [...fileList, ...nestedFiles];
    } else {
      fileList = [...fileList, filePath];
    }
  });

  return fileList;
};

module.exports = { getAllFiles };
