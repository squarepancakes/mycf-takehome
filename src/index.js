const fs = require('fs');
const path = require('path');

const FILE_TO_IGNORE = 'node_modules';

const DEFAULT_SEARCH = {
  dir: './',
  searchFilter: 'TODO',
};
const INVALID_PATH = 'Invalid path';

const getAllFiles = (dir) => {
  const pathExists = fs.existsSync(dir);
  if (!pathExists) {
    console.log(INVALID_PATH);
    return INVALID_PATH;
  }

  let fileList = [];
  const filesInDir = fs.readdirSync(dir);

  filesInDir.forEach((file) => {
    if (file !== FILE_TO_IGNORE) {
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
    }
  });

  return fileList;
};

const searchFiles = (
  dir = DEFAULT_SEARCH.dir,
  searchFilter = DEFAULT_SEARCH.searchFilter
) => {
  const pathExists = fs.existsSync(dir);
  if (!pathExists) {
    console.log(INVALID_PATH);
    return INVALID_PATH;
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
  console.log(matchedFilesList);
  return matchedFilesList;
};

searchFiles(process.argv[2], process.argv[3]);
module.exports = { getAllFiles, searchFiles };
