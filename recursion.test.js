const {power, fibonacci, reverse, isPalindrome, someRecursive} = require('./recursion')

test('behaves like math.pow()', () => {
  expect(power(2,0)).toBe(1)
})
test('behaves like math.pow()', () => {
  expect(power(2,2)).toBe(4)
})
test('behaves like math.pow()', () => {
  expect(power(2,4)).toBe(16)
})

test('that this is the fibonacci number', () => {
  expect(fibonacci(28)).toBe(317811)
})

test('this reverses strings', () => {
  expect(reverse('tickles')).toBe('selkcit')
})

test('that this is a palindrome', () => {
  expect(isPalindrome('tickles')).toBe(false)
})
test('that this is a palindrome', () => {
  expect(isPalindrome('tacocat')).toBe(true)
})
test('that this is a palindrome', () => {
  expect(isPalindrome('level')).toBe(true)
})

test('that one of the array elements is true after passing into callback', () => {
  expect(someRecursive([1,5,10,15], val => val > 30)).toBe(false)
})
test('that one of the array elements is true after passing into callback', () => {
  expect(someRecursive([1,5,10,30], val => val % 3 === 0)).toBe(true)
})