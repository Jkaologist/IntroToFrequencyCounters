const removeElement = require('./removeElement')

test('returns the count after removal of elements', () => {
  expect(removeElement([1,2,2,3], 3)
  ).toEqual(3)
})
