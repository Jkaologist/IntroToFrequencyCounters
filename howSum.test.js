const howSum = require('./howSum')

test('can sum the elements of the array to reach target', () => {
  expect(howSum(8, [2, 3, 5])).toStrictEqual([2, 2, 2, 2])});
test('can sum the elements of the array to reach target', () => {
  expect(howSum(7, [5, 3, 4, 7])).toStrictEqual([4, 3])});
test('can sum the elements of the array to reach target', () => {
  expect(howSum(7, [2, 4])).toBe(null)});
test('can sum the elements of the array to reach target', () => {
  expect(howSum(0, [1, 2, 3])).toStrictEqual([])});
test('can sum the elements of the array to reach target', () => {
  expect(howSum(300, [7, 14])).toBe(null)});
