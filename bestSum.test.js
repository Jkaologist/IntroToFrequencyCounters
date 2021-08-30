const bestSum = require('./bestSum')

test('can sum the elements of the array to reach target', () => {
  expect(bestSum(8, [2, 3, 5])).toStrictEqual([5, 3])});
test('can sum the elements of the array to reach target', () => {
  expect(bestSum(7, [5, 3, 4, 7])).toStrictEqual([7])});
test('can sum the elements of the array to reach target', () => {
  expect(bestSum(7, [2, 4])).toBe(null)});
test('can sum the elements of the array to reach target', () => {
  expect(bestSum(0, [1, 2, 3])).toStrictEqual([])});
test('can sum the elements of the array to reach target', () => {
  expect(bestSum(300, [7, 14])).toBe(null)});
test('can sum the elements of the array to reach target', () => {
  expect(bestSum(100, [1, 2, 5, 25])).toStrictEqual([25, 25, 25, 25])});
