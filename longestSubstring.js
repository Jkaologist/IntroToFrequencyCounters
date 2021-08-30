/**
 * Given a string s,
 * find the length of the longest substring without repeating characters.
 *
 * Constraints:
 * 0 <= s.length <= 5 * 10^4
 * s consists of English letters, digits, symbols and spaces.
 */
// // Brute Force O(N^2) SC O(N)
// function lengthOfLongestSubstring(s) {
//   let longestSubstring = 0;
//   if (s.length === 0) {
//     return longestSubstring;
//   }
//   let substring;
//   for (let i = 0; i < s.length; i++) {
//     substring = "";
//     substring += s[i];
//     for (let j = i + 1; j < s.length; j++) {
//       if (substring.indexOf(s[j]) > -1) {
//         break;
//       }
//       substring += s[j];
//     }
//     if (substring.length > longestSubstring) {
//       longestSubstring = substring.length;
//     }
//   }
//   return longestSubstring;
// }

// Clever JS solution
function lengthOfLongestSubstring(s) {
  let longestStr = '';
  let currentStr = '';
  for (let i = 0; i < s.length; i++) {
    let letter = s[i]
    let idx = currentStr.indexOf(letter);
    if (idx > -1) {
      if (currentStr.length > longestStr.length) {
        longestStr = currentStr;
      }
      currentStr = currentStr.slice(idx + 1) + letter
    }
    else {
      currentStr += letter;
    }
  }
  if (currentStr.length > longestStr.length) {
    longestStr = currentStr;
  }
  return longestStr.length
}

module.exports = lengthOfLongestSubstring;
