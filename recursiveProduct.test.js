const recursiveProduct = require('./recursiveProduct')

test('recursive product', () => {
  expect(recursiveProduct(5,6)).toBe(30)
})
test('recursive product', () => {
  expect(recursiveProduct(9,5)).toBe(45)
})
test('recursive product', () => {
  expect(recursiveProduct(2,0)).toBe(0)
})
test('recursive product', () => {
  expect(recursiveProduct(50,50)).toBe(2500)
})