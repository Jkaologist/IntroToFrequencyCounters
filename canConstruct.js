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
  if (target === "") return true
  // iterate through the words of the wordbank
  for (let word of wordBank) {
    // if a prefix exists shrink the target word
    if (target.indexOf(word) === 0) {
      // suffix will become the remainder of the target after the length of prefix
      const suffix = target.slice(word.length)
      if (canConstruct(suffix, wordBank) === true) {
        return true
      }
    }
  } 
  return false
}

module.exports = canConstruct;
