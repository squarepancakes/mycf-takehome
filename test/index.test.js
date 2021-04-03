const { getAllFiles } = require('../src/index.js');

describe('test', () => {
  it('should print a list of all files in the directory passed in', () => {
    const response = getAllFiles('./src');
    expect(response).toEqual(['index.js']);
  });
});
