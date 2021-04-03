const fs = require('fs');

const getAllFiles = (dir) => {
  const directoryExists = fs.existsSync(dir);
  if (!directoryExists) {
    return 'No such directory';
  }
  const printList = fs.readdirSync(dir);
  return printList;
};

module.exports = { getAllFiles };
