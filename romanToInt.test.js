const romanToInt = require('./romanToInt')

test('converts Roman numerals to integers', () => {
  expect(romanToInt("III")).toBe(3)
})
test('converts Roman numerals to integers', () => {
  expect(romanToInt("IV")).toBe(4)
})
test('converts Roman numerals to integers', () => {
  expect(romanToInt("LVIII")).toBe(58)
})
test('converts Roman numerals to integers', () => {
  expect(romanToInt("MCMXCIV")).toBe(1994)
})