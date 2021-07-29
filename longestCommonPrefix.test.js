const longestCommonPrefix = require('./longestCommonPrefix')

test('longest common prefix', () => {
  expect(longestCommonPrefix(["flower","flow","flight"])).toStrictEqual('fl')
})

test('longest common prefix', () => {
  expect(longestCommonPrefix(["dog","racecar","race"])).toStrictEqual('')
})

test('longest common prefix', () => {
  expect(longestCommonPrefix([])).toStrictEqual('')
})
