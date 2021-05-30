// O(N^2)

function findMedianSortedArrays(num1, num2) {
  let combinedSortedArr = [...num1, ...num2].sort((a,b) => a - b)
  let medianIdx = Math.floor(combinedSortedArr.length/2)
  console.log(combinedSortedArr, medianIdx)
  return (combinedSortedArr.length % 2 === 1) ? 
  combinedSortedArr[medianIdx] : 
  (combinedSortedArr[medianIdx] + combinedSortedArr[medianIdx - 1]) / 2
}

module.exports = findMedianSortedArrays