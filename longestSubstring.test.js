const longestSubstring = require('./longestSubstring')

test('returns the longest substring without duplicates', () => {
  expect(longestSubstring("abcabcbb")).toBe(3)
})

test('returns the longest substring without duplicates', () => {
  expect(longestSubstring("bbbbb")).toBe(1)
})

test('returns the longest substring without duplicates', () => {
  expect(longestSubstring("pwwkew")).toBe(3)
})
