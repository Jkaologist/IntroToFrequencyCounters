const countUniqueValues = require('./countUniqueValues')

test('returns the num of unique values', () => {
  expect(countUniqueValues([1,1,1,1,1,2])).toBe(2)
})
test('returns the num of unique values', () => {
  expect(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])).toBe(7)
})
test('returns the num of unique values', () => {
  expect(countUniqueValues([])).toBe(0)
})
test('returns the num of unique values', () => {
  expect(countUniqueValues([-2,-1,-1,0,1])).toBe(4)
})