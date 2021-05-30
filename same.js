/*
Write a function called same, which accepts two arrays.
The function should return true if every value in the array
has it's corresponding value squared in the second array.
The frequency of values must be the same.
*/

// Functional Programming with O(N^2) Times

// function same(arr1, arr2) {
//   return arr1
//   .sort((a,b) => b-a)
//   .map(val => val*val)
//   .join('')
//   === arr2
//   .sort((a,b) => b-a)
//   .join('')
// }

// function same(arr1, arr2) {
//   // Base case arr of different lengths have different frequencies
//   if (arr1.length !== arr2.length) {
//     return false
//   }
//   // for each ele in arr1
//   for (let i = 0; i < arr1.length; i++) {
//     // check to see if the arr ele from arr1 is in arr2
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] ** 2 === arr2[j]) {
//         // mutate arr2, remove that val
//         arr2.splice(j, 1)

//       }
//     }
//   }
//   return (arr2.length === 0)
// }

// Using indexOf
// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false
//   }
//   for(let num of arr1) {
//     let idx1 = arr2.indexOf(num ** 2)
//     if (idx1 === -1) {
//       return false
//     } 
//     arr2.slice(idx1)
//   }
//   return true
// }

// O(constant) lookup times solution
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let freqCount1 = {}
  let freqCount2 = {}

  for (let num of arr1) {
    // advanced frequency counting
    freqCount1[num] = ++freqCount1[num] || 1
  }
  for (let num of arr2) {
    // traditional frequency counter
    if (freqCount2[num]) {
      freqCount2[num]++
    } freqCount2[num] = 1
  }
  for (let key in freqCount1) {
    if (!(key in freqCount2)) {
      return false
    }
    if (freqCount2[key ** 2] !== freqCount1[key]) {
      return false
    }
    return true
  }
}

module.exports = same
