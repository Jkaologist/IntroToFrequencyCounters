/**
 * Given a string containing digits from 2-9 inclusive,
 * return all possible letter combinations
 * that the number could represent. Return the answer in any order.
 * A mapping of digit to letters (just like on the telephone buttons)
 * is given below. Note that 1 does not map to any letters.
 * */

function letterCombinations(digits) {
  let combinations = []
  if (digits.length === 0) return combinations;
  let letters = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  }
  function backtrack(idx = 0, path = []) {
    if (path.length === digits.length) {
      combinations.push(path.join(''))
      return
    }
    let possibleLetters = letters[digits[idx]]
    for (let letter of possibleLetters) {
      path.push(letter)
      backtrack(idx + 1, path)
      path.pop()
    }
  }
  backtrack()
  return combinations
}

module.exports = letterCombinations
