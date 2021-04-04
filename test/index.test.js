const { getAllFiles } = require('../src/getAllFiles');
const { searchFiles } = require('../src/searchFiles');
const { INVALID_PATH } = require('../constants/defaultErrorMsg');

const dir = '/Users/fruitcake/pancakeStack/take-home-test/govtech';

describe('test', () => {
  it('should print a list of all files in the directory passed in', () => {
    const response = getAllFiles('./src');
    expect(response).toEqual([
      'src/getAllFiles.js',
      'src/index.js',
      'src/searchFiles.js',
    ]);
  });

  it('should print an error if path does not exist', () => {
    const response = getAllFiles('./apple');
    expect(response).toBe(INVALID_PATH);
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

  it('should search within ./ if no directory for search is provided', () => {
    const filesContainingWord = searchFiles();
    expect(filesContainingWord).toEqual([
      `${dir}/constants/defaultSearchValues.js`,
      `${dir}/mockData/mockData/mockData.js`,
      `${dir}/mockData/mockData.js`,
      `${dir}/test/index.test.js`,
    ]);
  });
});
