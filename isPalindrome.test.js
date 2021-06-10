const isPalindrome = require('./isPalindrome')

test('tests that numbers are a palindrome', () => {
  expect(isPalindrome(121)).toBe(true)
})
test('tests that numbers are a palindrome', () => {
  expect(isPalindrome(-121)).toBe(false)
})
test('tests that numbers are a palindrome', () => {
  expect(isPalindrome(-101)).toBe(false)
})
test('tests that numbers are a palindrome', () => {
  expect(isPalindrome(11)).toBe(true)
})
test('tests that numbers are a palindrome', () => {
  expect(isPalindrome(1001)).toBe(true)
})