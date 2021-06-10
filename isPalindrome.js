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
function isPalindrome(x) {
  if (x < 0) return false
  let left = 10 ** Math.trunc(Math.log10(Math.abs(x)))
  while (0 < x) {
    if (Math.trunc(x / left) !== x % 10) return false
    x = Math.trunc((x % left) / 10)
    left /= 100
  }
  return true
}

module.exports = isPalindrome