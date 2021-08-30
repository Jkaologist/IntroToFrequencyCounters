/**
 * Write a function `bestSum(targetSum, numbers)`
 * that takes in a targetSum and an array of numbers as arguments
 *
 * The function should return an array containing
 * the shortest combination of numbers that add up to
 * exactly the targetSum
 *
 * If there is a tie for the shortest combination,
 * you may return any of the shortest
 */

const bestSum = (targetSum, numbers, memo = {}) => {
  // a single base case for memo
  if (targetSum in memo) return memo[targetSum]
  // have two base cases to handle different outcomes
  // hitting a possible target combo
  if (targetSum === 0) return [];
  // going past
  if (targetSum < 0) return null;
  // default to null to return if no combination is found
  let shortestCombination = null;

  for (let num of numbers) {
    const remainder = targetSum - num
    const result = bestSum(remainder, numbers, memo)
    if (result) {
      const combination = [...result, num]
      // if the combination is shorter than the current "shortest", update it
      if (shortestCombination === null || combination.length < shortestCombination.length) {
        shortestCombination = combination;
      }
    }
  }
  memo[targetSum] = shortestCombination
  return shortestCombination;
};

module.exports = bestSum;
