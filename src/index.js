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

const searchFiles = (dir, searchFilter = 'TODO') => {
  const directoryExists = fs.existsSync(dir);
  if (!directoryExists) {
    return 'No such directory';
  }

  const allFilesInDir = getAllFiles(dir);
  let matchedFiles = [];

  allFilesInDir.forEach((file) => {
    const fileContents = fs.readFileSync(file);

    const containsFilter = fileContents.includes(searchFilter);
    if (containsFilter) {
      matchedFiles = [...matchedFiles, file];
    }
  });

  const matchedFilesList = matchedFiles.map((filePath) =>
    path.resolve(filePath)
  );

  return matchedFilesList;
};

searchFiles(process.argv[2], process.argv[3]);
module.exports = { getAllFiles, searchFiles };
