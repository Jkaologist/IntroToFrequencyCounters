const canSum = require('./canSum')

test('can sum the elements of the array to reach target', () => {
  expect(canSum(7, [2, 3])).toBe(true)});
test('can sum the elements of the array to reach target', () => {
  expect(canSum(7, [5, 3, 4, 7])).toBe(true)});
test('can sum the elements of the array to reach target', () => {
  expect(canSum(7, [2, 4])).toBe(false)});
test('can sum the elements of the array to reach target', () => {
  expect(canSum(8, [2, 3, 5])).toBe(true)});
test('can sum the elements of the array to reach target', () => {
  expect(canSum(300, [7, 14])).toBe(false)});