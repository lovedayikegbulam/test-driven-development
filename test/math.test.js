const { add, sub, div, pow } = require('../src/mathLib');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('adds 1 + 2 to equal 3', () => {
  expect(sub(2, 1)).toBe(1);
});

test('adds 1 + 2 to equal 3', () => {
  expect(div(4, 2)).toBe(2);
});

test('adds 1 + 2 to equal 3', () => {
  expect(pow(2, 2)).toBe(4);
});

