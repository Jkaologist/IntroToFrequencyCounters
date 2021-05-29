const maxArea = require('./container-with-most-water')

test('height of nums returns max area', () => {
  expect(maxArea([1,8,6,2,5,4,8,3,7])).toBe(49)
})
test('height of nums returns max area', () => {
  expect(maxArea([1,1])).toBe(1)
})
test('height of nums returns max area', () => {
  expect(maxArea([4,3,2,1,4])).toBe(16)
})
test('height of nums returns max area', () => {
  expect(maxArea([1,2,1])).toBe(2)
})
test('height of nums returns max area', () => {
  expect(maxArea([2,2,2,2,2,6,2,6,2,2,2,2,2])).toBe(24)
})
test('height of nums returns max area', () => {
  expect(maxArea([2,1])).toBe(1)
})
test('height of nums returns max area', () => {
  expect(maxArea([1,2])).toBe(1)
})