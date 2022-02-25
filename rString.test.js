const rString = require('./rString');

test('reverses a string', () => {
  expect(rString('ryan')).toMatch('nayr');
});