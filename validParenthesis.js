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
  if (s.length % 2 === 1) return false
  const map = new Map()
  map.set('[', ']')
  map.set('{', '}')
  map.set('(', ')')
  // use a stack to match string elements to their closing mapped pair
}

module.exports = validParenthesis
