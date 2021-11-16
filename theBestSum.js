/**
 * Write a function `theBestSum(tar, nums)`
 * that takes in a targetSum and an array of numbers as arguments
 *
 * The function should return an array containing
 * the shortest combination of numbers that add up to
 * exactly the targetSum
 *
 * If there is a tie for the shortest combination,
 * you may return any of the shortest
 */

const theBestSum = (tar, nums, memo = {}) => {
  // check initially if the target sum is already in the memo
  if (tar in memo) return memo[tar]
  // base case 
  if (tar === 0) return []
  if (tar < 0) return null
  let shortest = null
  for (let num of nums) {
    const rem = tar - num
    // must recursively call with memo
    const res = theBestSum(rem, nums, memo)
    if (res) {
      const combo = [...res, num]
      if (shortest === null || combo.length < shortest.length) {
        shortest = combo
      }
    }
  }
  // insert key of tar into the memoized object
  memo[tar] = shortest
  return shortest
}

console.log("This is the path: ", theBestSum(8,[2,3,5]))