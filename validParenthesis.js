/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 *
 * An input string is valid if:
 *
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 */

// build a map, run through a stack to return
function validParenthesis(s) {
  if (s.length % 2 === 1 || s === null || s === undefined) {
    return false;
  }

  let stack = [];

  let map = {
    "]": "[",
    "}": "{",
    ")": "(",
  };

  for (let c of s) {
    let topElement;
    if (map[c] !== undefined) {
      topElement = stack.length === 0 ? "#" : stack.pop();
      if (map[c] !== topElement) {
        return false;
      }
    } else {
      stack.push(c);
    }
  }
  return stack.length === 0;
}

module.exports = validParenthesis;
