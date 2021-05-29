const validAnagram = require('./valid-anagram')

test('empty strings are valid anagrams of eachother', () => {
  expect(validAnagram('', '')).toBe(true)
})

test('strings are valid anagrams of eachother', () => {
  expect(validAnagram('aaz', 'zza')).toBe(false)
})

test('strings are valid anagrams of eachother', () => {
  expect(validAnagram('anagram', 'nagaram')).toBe(true)
})

test('strings are valid anagrams of eachother', () => {
  expect(validAnagram('awesome', 'awesom')).toBe(false)
})

test('strings are valid anagrams of eachother', () => {
  expect(validAnagram('texttwisttime', 'timetexttwist')).toBe(true)
})