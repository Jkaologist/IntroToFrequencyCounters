const substringCount = require('./substringMatch')

test('counts number of substrings', () => {
  expect(substringCount('omg', 'omgomgzomg')).toStrictEqual(3)
})

test('counts number of substrings', () => {
  expect(substringCount('lolololol', 'qwerty')).toStrictEqual(0)
})
