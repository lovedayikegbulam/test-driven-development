const { add, sub, div, pow } = require('../src/mathLib');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('subtract 2 - 1 to equal 1', () => {
  expect(sub(2, 1)).toBe(1);
});

test('divide 4 / 2 to equal 2', () => {
  expect(div(4, 2)).toBe(2);
});

test('exponent 2 ** 2 to equal 4', () => {
  expect(pow(2, 2)).toBe(4);
});

