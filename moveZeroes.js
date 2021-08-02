/**
 * Given an integer array nums, move all 0's to the end of it
 * while maintaining the relative order of the non-zero elements.
 *
 * Note that you must do this in-place without making a copy of the array.
 */

function moveZeroes(arr) {
  if (arr.length === 1 || arr.length === 0) return arr;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      if (firstNonZeroIdx(arr, i) !== -1) {
        [arr[i], arr[firstNonZeroIdx(arr, i)]] = [
          arr[firstNonZeroIdx(arr, i)],
          arr[i],
        ]
      }
    }
  }
  return arr
}

// returns first idx of next non zero element or -1 if not avail
function firstNonZeroIdx(arr, idx) {
  for (let i = idx + 1; i < arr.length; i++) {
    if (arr[i] !== 0) {
      return i;
    }
  }
  return -1;
}

module.exports = moveZeroes;
