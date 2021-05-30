const letterCombinations = require('./letterCombinations')

test('returns combinations', () => {
  expect(letterCombinations("23")).toStrictEqual(["ad","ae","af","bd","be","bf","cd","ce","cf"])
})

test('returns combinations', () => {
  expect(letterCombinations("")).toStrictEqual([])
})

test('returns combinations', () => {
  expect(letterCombinations("2")).toStrictEqual(["a","b","c"])
})