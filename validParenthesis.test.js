const validParenthesis = require('./validParenthesis')

test('valid parenthesis', () => {
  expect(validParenthesis("()")).toBe(true)
})

test('valid parenthesis', () => {
  expect(validParenthesis("()[]{}")).toBe(true)
})

test('valid parenthesis', () => {
  expect(validParenthesis("(]")).toBe(false)
})

test('valid parenthesis', () => {
  expect(validParenthesis("([)]")).toBe(false)
})

test('valid parenthesis', () => {
  expect(validParenthesis("{[]}")).toBe(true)
})
