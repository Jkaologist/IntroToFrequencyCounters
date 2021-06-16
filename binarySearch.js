// Write a function called binarySearch which accepts a sorted array
// and a value and returns the index at which the value exists.
// Otherwise returns -1.

// // O(N)
// function binarySearch(arr, val) {
//   return arr.findIndex(i => i===val)
// }

// // O(N)
// function binarySearch(arr, val) {
//   return arr.indexOf(val)
// }

// This does not handle duplicates O(N)
function binarySearch(arr, val) {
  let left = 0
  let right = arr.length - 1
  let mid = Math.floor(right - left / 2)
  if (arr[mid] === val) return mid 
  if (left < right) {
    if (arr[mid] < val) {
      left = mid
      return binarySearch(arr.slice(left, right), val)
    }
    right = mid
    return binarySearch(arr.slice(left, right), val)
  }
  return -1
}

module.exports = binarySearch
