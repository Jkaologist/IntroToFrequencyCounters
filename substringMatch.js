/**
 * Loop over a longer string and count the number of
 * times a substring is in the longer string
 */

// double loop string search naive solution O(n^2) TC
function substringCount(str1, str2) {
  let longer = str1.length > str2.length ? str1 : str2
  let shorter = str1.length > str2.length ? str2 : str1
  let counter = 0
  for (let i = 0; i < longer.length; i++) {
    for (let j = 0; j < shorter.length; j++) {
      if (shorter[j] !== longer[i+j]) break
      if (j === shorter.length - 1) counter++
    }
  }
  return counter;
}

module.exports = substringCount