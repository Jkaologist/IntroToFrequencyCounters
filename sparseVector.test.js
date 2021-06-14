const SparseVector = require('./sparseVector')

test('That is computes dot products of two sparse vectors', () => {
  expect(new SparseVector([1,0,0,2,3]).dotProduct([0,3,0,4,0])).toBe(8)
})
test('That is computes dot products of two sparse vectors', () => {
  expect(new SparseVector([0,1,0,0,0]).dotProduct([0,0,0,0,2])).toBe(0)
})
test('That is computes dot products of two sparse vectors', () => {
  expect(new SparseVector([0,1,0,0,2,0,0]).dotProduct([1,0,0,0,3,0,4])).toBe(6)
})