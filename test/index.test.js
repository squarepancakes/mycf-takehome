const { getAllFiles } = require('../src/index.js');

describe('test', () => {
  it('should print a list of all files in the directory passed in', () => {
    const response = getAllFiles('./src');
    expect(response).toEqual(['index.js']);
  });

  it('should print an error if directory does not exist', () => {
    const response = getAllFiles('./apple');
    expect(response).toBe('No such directory');
  });
});
