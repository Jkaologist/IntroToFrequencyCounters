/*
Given 2 strings, write a function to determine 
if the second string is an anagram of the first.
An anagram is a word, phrase, or name formed by
rearranging the letters of another, such as cinema,
formed from iceman.
*/

// // O(constant) look up time.
// function validAnagram(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false
//   }
//   let freqCounter1 = {}
//   let freqCounter2 = {}
//   for (let c of str1) {
//     freqCounter1[c] = ++freqCounter1[c]|| 1
//   }
//   for (let c of str2) {
//     freqCounter2[c] = ++freqCounter2[c]|| 1
//   }
//   console.log(freqCounter1, freqCounter2)
//   for (let key in freqCounter1) {
//     if (!(key in freqCounter2)) {
//       return false
//     }
//     if (freqCounter2[key] !== freqCounter1[key]) {
//       return false
//     }
//   }
//   return true
// }

// Functional programming solution
function validAnagram(str1, str2) {
  return (
    str1
    .split('')
    .sort()
    .join('') === 
    str2
    .split('')
    .sort()
    .join('')
  )
}

// function validAnagram(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false
//   }

//   const lookup = {}

//   for (let i = 0; i < str1.length; i++) {
//     let letter = str1[i]
//     lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
//   }
// }

module.exports = validAnagram