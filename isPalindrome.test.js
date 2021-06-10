const isPalindrome = require('./isPalindrome')

test('behaves like math.pow()', () => {
  expect(isPalindrome(121)).toBe(true)
})
test('behaves like math.pow()', () => {
  expect(isPalindrome(-121)).toBe(false)
})
test('behaves like math.pow()', () => {
  expect(isPalindrome(-101)).toBe(false)
})