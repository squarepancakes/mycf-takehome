const { getAllFiles, searchFiles } = require('../src/index.js');

const dir = '/Users/fruitcake/pancakeStack/take-home-test/govtech';

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
      'mockData/mockData2.js',
    ]);
  });

  it('should return search for files containing TODO no filter provided', () => {
    const filesContainingWord = searchFiles('./mockData');
    expect(filesContainingWord).toEqual([
      `${dir}/mockData/mockData/mockData.js`,
      `${dir}/mockData/mockData.js`,
    ]);
  });

  it('should return all files within the directory containing the search term', () => {
    const filesContainingWord = searchFiles('./mockData', 'TODO');
    expect(filesContainingWord).toEqual([
      `${dir}/mockData/mockData/mockData.js`,
      `${dir}/mockData/mockData.js`,
    ]);
  });

  it('should return an empty array if no matching files are found', () => {
    const filesContainingWord = searchFiles('./mockData', 'todo');
    expect(filesContainingWord).toEqual([]);
  });
});
