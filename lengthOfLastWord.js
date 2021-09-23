var lengthOfLastWord = function(s) {
  s = s.trim()
  let count = 0
  if (s.length === 0) return count
  if (s.length === 1) return 1
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " " || undefined) {
        return count
    }
    count ++
  }
  return count
};

console.log(lengthOfLastWord("    day"))