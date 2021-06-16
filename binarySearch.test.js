const binarySearch = require('./binarySearch')

test('returns index of val, otherwise -1', () => {
  expect(binarySearch([1,2,3,4,5,6,7], 7)).toBe(6)
})
test('returns index of val, otherwise -1', () => {
  expect(binarySearch([1,1], 5)).toBe(-1)
})
test('returns index of val, otherwise -1', () => {
  expect(binarySearch([1,5,10,15], 10)).toBe(2)
})
test('returns index of val, otherwise -1', () => {
  expect(binarySearch([0,5,8,10], 5)).toBe(1)
})
test('returns index of val, otherwise -1', () => {
  expect(binarySearch([3,5,7,9], 5)).toBe(1)
})