const reverse = require('./reverseInteger')

test('reverse input', () => {
  expect(reverse(123)).toBe(321)
})
test('reverse input', () => {
  expect(reverse(-123)).toBe(-321)
})
test('reverse input', () => {
  expect(reverse(120)).toBe(21)
})
test('reverse input', () => {
  expect(reverse(0)).toBe(0)
})
