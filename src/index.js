const { searchFiles } = require('./searchFiles');

const searchDir = (dir, searchFilter) => {
  console.log(searchFiles(dir, searchFilter));
};

searchDir(process.argv[2], process.argv[3]);
