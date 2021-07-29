const moveZeroes = require('./moveZeroes')

test('move zeroes to back', () => {
  expect(moveZeroes([0,1,0,3,12])).toStrictEqual([1,3,12,0,0])
})

test('move zeroes to back', () => {
  expect(moveZeroes([0])).toStrictEqual([0])
})
