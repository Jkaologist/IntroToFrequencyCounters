/**
 * given a target sum and an array return true
 * if the elements of the array can compose the target sum
 * you are allowed to generate the target sum with any number combination
 * including a single value and duplicates within the array
 * numbers in array are all > 0
*/

const canSum = (targetSum, numbers, memo={}) => {
  // break case
  if (targetSum in memo) return memo[targetSum]
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;
  for (let num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers, memo) === true) {
      memo[targetSum] = true;
      return true;
    };
  }
  memo[targetSum] = false;
  return false;
}

module.exports = canSum;
