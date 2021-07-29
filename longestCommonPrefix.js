/** Write a function to find the longest common prefix string 
 * amongst an array of strings.
 * If there is no common prefix, return an empty string ""
 **/

// gather largest common prefix of strings 
// by comparing the first string to all others
// O(n^2) time complexity because of looping through every element in the array
// and comparing the prefix indexes through each

// O(1) space complexity. Storing one prefix and reassigning every time.
function longestCommonPrefix(strs) {
  if (strs.length === 0) return ''
  let prefix = strs[0]
  // loop every string after the first and reassign the prefix string accordingly
  for (let i = 1; i < strs.length; i++) {
    // while first word is not 0 indexed of the next word
    while (strs[i].indexOf(prefix) !== 0) {
      // set is to a substring of 1 less letter from the back
      prefix = prefix.slice(0, prefix.length - 1)
      // if it reaches 0 and has no match set it to 0
      if (prefix === '') return ''
    }
  }
  // return prefix if prefix is only string in array
  return prefix
}

module.exports = longestCommonPrefix
