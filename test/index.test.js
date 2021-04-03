const { test } = require('../src/index.js');

describe('test', () => {
  it('should return applepie', () => {
    const response = test('applepie');
    expect(response).toBe('applepie');
  });
});
