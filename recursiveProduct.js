/* Write a recursive function to multiply two positive integers 
without using the * operator. You can use addition, subtraction, 
and bit shifting but you should minimize the number of those operations */

// straight recursion
function recursiveProduct(num1, num2){
  if (num2 === 0) return 0
  return num1 + recursiveProduct(num1, num2 - 1)
}

module.exports = recursiveProduct