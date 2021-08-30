const canConstruct = require('./canConstruct')

test('can sum the elements of the array to reach target', () => {
  expect(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])).toBe(true)});
test('can sum the elements of the array to reach target', () => {
  expect(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",
  ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"])).toBe(false)});
