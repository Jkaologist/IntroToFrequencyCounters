// // Pure Recursion Collect All Odd Values In an Array!
// function collectOddValues(arr) {
//   let newArr = []
//   if (arr.length === 0) return newArr
//   if (arr[0] % 2 === 1) newArr.push(arr[0])
//   return newArr.concat(collectOddValues(arr.slice(1)))
// }

/** Write a function called power which accepts a base and an exponent.
 * The function should return the power of the base to the exponent.
 * This function should mmic the functionality of a Math.pow() - do not
 * worry about negative bases and exponents 
*/
function power(base, exponent) {
  if (exponent === 0) return 1
  return base * power(base, exponent-1)
}

// return the fibonacci number at the sequence position passed into the fn
function fibonacci(n) {
  if (n <= 2) return 1
  return fibonacci(n-1) + fibonacci(n-2)
}

// write a function that recursively reverses a string
function reverse(str) {
  if (str.length <= 1) return str
  return reverse(str.slice(1)) + str[0]
}

// Write a recursive function called isPalindrome which returns true if the
// string passed to it is a palindrome (reads the same forward and backward)
// Otherwise return false
function isPalindrome(str) {
  if (str.length === 1) return true
  if (str.length === 2) return str[0] === str[1]
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
  return false
}

// Write a recursive function called someRecursive which accepts an array and a callback.
// The function returns true if a single value in the array returns true
// when passed to the callback. Otherwise it returns false.
function someRecursive(arr, callback) {
  if (arr.length < 1) return callback(arr[0])
  if (callback(arr[0])) return true
  return someRecursive(arr.slice(1), callback)
}

module.exports = {power, fibonacci, reverse, isPalindrome, someRecursive}