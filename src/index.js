const fs = require('fs');

const getAllFiles = (dir) => {
  const printList = fs.readdirSync(dir);
  return printList;
};

module.exports = { getAllFiles };
