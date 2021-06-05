const maximumUnits = require('./maximumUnitsOnTruck')

test('calculates maximum units on a truck', () => {
  expect(maximumUnits([[1,3], [2,2], [3,1]], 4)).ToBe(8)
})
test('calculates maximum units on a truck', () => {
  expect(maximumUnits([[5,10],[2,5],[4,7],[3,9]], 10).ToBe(91)
})