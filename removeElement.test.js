const removeElement = require('./removeElement')

test('returns the count after removal of elements', () => {
  expect(removeElement([3,2,2,3], 3)
  ).toBe(2)
})
