const { getAllFiles } = require('../src/index.js');

describe('test', () => {
  it('should print a list of all files in the directory passed in', () => {
    const response = getAllFiles('./src');
    expect(response).toEqual(['src/index.js']);
  });

  it('should print an error if directory does not exist', () => {
    const response = getAllFiles('./apple');
    expect(response).toBe('No such directory');
  });

  it('should print all the files including files nested in sub-directories', () => {
    const response = getAllFiles('./mockData');
    expect(response).toEqual([
      'mockData/mockData/mockData.js',
      'mockData/mockData.js',
    ]);
  });
});
