const twoSum = require('./twoSum')

test('that the sum of two numbers in the array equals the target', () => {
  expect(twoSum([2,7,11,15], 9)).toStrictEqual([0,1])
})
test('that the sum of two numbers in the array equals the target', () => {
  expect(twoSum([3,2,4], 6)).toStrictEqual([1,2])
})
test('that the sum of two numbers in the array equals the target', () => {
  expect(twoSum([3,3], 6)).toStrictEqual([0,1])
})