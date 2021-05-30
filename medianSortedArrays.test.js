const findMedianSortedArrays = require('./medianSortedArrays')

test("return median", () => {
  expect(findMedianSortedArrays([1,3],[2])).toBe(2)
})
test("return median", () => {
  expect(findMedianSortedArrays([1,2],[3,4])).toBe(2.5)
})
test("return median", () => {
  expect(findMedianSortedArrays([0,0],[0,0])).toBe(0)
})
test("return median", () => {
  expect(findMedianSortedArrays([],[1])).toBe(1)
})
test("return median", () => {
  expect(findMedianSortedArrays([2],[])).toBe(2)
})