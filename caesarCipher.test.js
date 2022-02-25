const caesarCipher = require('./caesarCipher');

test('encodes a string', () => {
  expect(caesarCipher('party', 2)).toMatch('rctva');
});