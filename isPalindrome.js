// // To String O(n) TC O(n) SC Extra Space Required!
// function isPalindrome(num) {
//   let str = num.toString()
//   let reverseStr = ''
//   for (let i = str.length - 1; i >= 0; i--) {
//     reverseStr += str[i]
//   }
//   return reverseStr === str ? true : false
// }

// Using maths O(log(n)) TC O(1) SC
function isPalindrome(num) {
  if (num < 0 || (num % 10 === 0 && num !== 0)) { 
    return false
  }
  let reversedNumber = 0
  while (num > reversedNumber) {
    reversedNumber = reversedNumber * 10 + num % 10
    num /= 10
  }
  return num === reversedNumber || num === reversedNumber / 10
}

module.exports = isPalindrome