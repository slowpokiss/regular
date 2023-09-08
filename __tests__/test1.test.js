import Validator from '../src/index';

test.each([
  ['1buba', false],
  ['buba5', false],
  ['buba-', false],
  ['_buba', false],
  ['buba', true],
  ['bu_ba', true],
  ['bu123ba', false],
  ['b12u13b12a', true],
])('testing nicknames', (nickname, expResult) => {
  const result = Validator.validateUsername(nickname);
  expect(result).toBe(expResult);
});
