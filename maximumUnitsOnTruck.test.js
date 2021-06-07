const maximumUnits = require('./maximumUnitsOnTruck')

test('calculates maximum units on a truck', () => {
  expect(maximumUnits([[1,3], [2,2], [3,1]], 4)).toBe(8)
})
test('calculates maximum units on a truck', () => {
  expect(maximumUnits([[5,10],[2,5],[4,7],[3,9]], 10)).toBe(91)
})
test('calculates maximum units on a truck', () => {
  expect(maximumUnits([[2,1],[4,4],[3,1],[4,1],[2,4],[3,4],[1,3],[4,3],[5,3],[5,3]], 13)).toBe(48)
})