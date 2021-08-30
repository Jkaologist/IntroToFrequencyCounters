/**
 * Write a function `canConstruct(target, wordBank)` that
 * accepts a target string and an array of strings
 * 
 * The function should return a boolean indicating whether or not
 * the `target` can be constructed by concatenating elements of the
 * `wordbank` array.
 * 
 * You may reuse elements of `wordbank` as many times as needed.
 */

// The approach here is to recurse through target string removing prefixes
// until the base case of an empty string is achieved
const canConstruct = (target, wordBank, memo = {}) => {
  // base cases
  if (target in memo) return memo[target]
  if (target === "") return true
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length)
      const result = canConstruct(suffix, wordBank, memo)
      if (result) {
        memo[target] = true
        return true
      }
    }
  }
  memo[target] = false
  return false
}

module.exports = canConstruct;
