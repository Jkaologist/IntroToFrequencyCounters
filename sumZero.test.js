const sumZero = require('./sumZero')

test('returns first pair of nums that total zero or undefined', () => {
  expect(sumZero([-3,-2,-1,-1,0,1,2,3])).toStrictEqual([-3,3])
})
test('returns first pair of nums that total zero or undefined', () => {
  expect(sumZero([-2,0,1,3])).toBe(undefined)
})
test('returns first pair of nums that total zero or undefined', () => {
  expect(sumZero([1,2,3])).toBe(undefined)
})
test('returns first pair of nums that total zero or undefined', () => {
  expect(sumZero([-4,-2,-1,0,1,2,3])).toStrictEqual([-2,2])
})
