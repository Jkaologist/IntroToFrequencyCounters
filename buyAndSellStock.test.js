const maxProfit = require('./buyAndSellStock')

test('returns the maximum profit achievable from transaction', () => {
  expect(maxProfit([7,1,5,3,6,4])).toBe(5)
})
test('returns the maximum profit achievable from transaction', () => {
  expect(maxProfit([7,6,4,3,1])).toBe(0)
})
