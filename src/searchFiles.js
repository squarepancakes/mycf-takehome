const fs = require('fs');
const path = require('path');
const { getAllFiles } = require('./getAllFiles');
const { DEFAULT_SEARCH } = require('../constants/defaultSearchValues');
const { INVALID_PATH } = require('../constants/defaultErrorMsg');

const searchFiles = (
  dir = DEFAULT_SEARCH.dir,
  searchFilter = DEFAULT_SEARCH.searchFilter
) => {
  try {
    fs.existsSync(dir);

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
  } catch (err) {
    return INVALID_PATH;
  }
};

module.exports = {
  searchFiles,
};
