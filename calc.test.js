const calc = require('./calc');

test('performs a calculation', () => {
  expect(calc.add(1, 2)).toBe(3);
  expect(calc.subtract(5, 2)).toBe(3);
  expect(calc.multiply(3, 2)).toBe(6);
  expect(calc.divide(10, 2)).toBe(5);
});