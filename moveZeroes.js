/**
 * Given an integer array nums, move all 0's to the end of it 
 * while maintaining the relative order of the non-zero elements.
 * 
 * Note that you must do this in-place without making a copy of the array.
 */

function moveZeroes(arr) {
  if (arr.length === 1 || arr.length === 0) return arr
  let left = 0
  let end = arr.length - 1
  while (left < end) {
    let swapIdx
    if (arr[left] === 0) {
      swapIdx = firstNonZeroIdx(arr.slice(left))
      [arr[left], arr[swapIdx]] = [arr[swapIdx], arr[left]]
      left ++
    }
    else {
      left ++
    }
  }
  return arr
}

function firstNonZeroIdx(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      return i
    }
  } return -1
}

module.exports = moveZeroes
