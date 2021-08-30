/**
 * Write a function `howSum(targetSum, numbers)` that takes in a
 * targetSum and an array of numbers as arguments.
 *
 * The function should return an array containing any combination of
 * elements that add up to exactly the targetSum. If there is no combination
 * that adds up to targetSum, then return null.
 */

const howSum = (targetSum, numbers, memo = {}) => {
  // base cases
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const result = howSum(remainder, numbers, memo);
    if (result) {
      memo[targetSum] = [...result, num];
      return memo[targetSum]
    }
  }
  memo[targetSum] = null;
  return null;
}

module.exports = howSum;
