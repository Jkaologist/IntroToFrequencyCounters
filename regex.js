// recurse and test the string for pattern presentation

// function solution {
//   const isMatch = (text, pattern) => {
//     if (!pattern) return !text

//     let firstMatch = text && (pattern[0] == text[0] || pattern[0] == ".")

//     if (pattern.length
//   }
// }

function isMatch(text, pattern) {
  if (!pattern) return !text;
  let firstMatch = text && (pattern[0] === text[0] || pattern[0] === ".");
  if (pattern.length >= 2 && pattern[1] === "*") {
    return (
      isMatch(text, pattern.slice(2)) ||
      (firstMatch && isMatch(text.slice(1), pattern))
    );
  } else {
    return firstMatch && isMatch(text.slice(1), pattern.slice(1));
  }
}

console.log(isMatch("aa", "a")); // false
console.log(isMatch("aa", ".a")); // true
console.log(isMatch("aa", "a.")); // true
console.log(isMatch("aa", "a*")); // true
console.log(isMatch("ab", ".*")); // true
console.log(isMatch("aab", "c*a*b")); // true
console.log(isMatch("mississippi", "mis*is*p")); //false
