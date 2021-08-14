/**
 * Given n pairs of parentheses,
 * write a function to generate all combinations of well-formed parentheses.
 *
 * Example 1:
 * Input: n = 3
 * Output: ["((()))","(()())","(())()","()(())","()()()"]
 *
 * Example 2:
 * Input: n = 1
 * Output: ["()"]
 *
 * Example 3:
 * Input: n = 2
 * Output: ["(())", "()()"]
 *
 * Constraints:
 * 1 <= n <= 8
 *
 * @param {number} n
 * @return {string[]}
 */

function generateParenthesis(n) {
  let dict = { "(": ")" };
  let length = n * 2;
  let out = [];
  let string = "";
  // all first half is front facing
  console.log(n);
}

module.exports = generateParenthesis;
