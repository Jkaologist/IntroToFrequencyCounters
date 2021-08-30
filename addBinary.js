/**
 * b.length
 * b.length - 1
 * b.length - 2
let b = "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
                                                                                                           |
let a = "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101"
                                                                                                       |
a "101"
b "111"
length + 1
*/
let a = "1011"
let b = "0011001"

function addBinary(a, b, idx = 0, str = "", rem = 0, shorter = "" + Math.min(a, b), longer = "" + Math.max(a, b)) {
  console.log("IS THERE A REMAINDER ?", rem)
  console.log("ADD THESE TWO TOGETHER", a[a.length - 1 - idx], b[b.length - 1 - idx])
  console.log("ADDED TOGETHER PROPERLY", parseInt(a[a.length - 1 - idx]) + parseInt(b[b.length - 1 - idx]) + rem)

  console.log("LONGER REMAINING", longer.slice(0, longer.length - shorter.length))
  console.log("ACCUMULATED", str)
  console.log("SHORTER.LENGTH & IDX", shorter.length - 1, idx)
  // base cases
  if (idx === shorter.length && rem === 0) {
    return longer.slice(0, longer.length - shorter.length) + str
  }
  else if (idx === shorter.length && rem === 1) {
    return "still broken"
  }
  // remainder handler
  if (rem === 1) {
    if (parseInt(a[a.length - 1 - idx]) + parseInt(b[b.length - 1 - idx]) + rem === 1) {
      return addBinary(a, b, idx + 1, 1 + str)
    }

    else if (parseInt(a[a.length - 1 - idx]) + parseInt(b[b.length - 1 - idx]) + rem === 2) {
      return addBinary(a, b, idx + 1, 0 + str, rem = 1)
    }
    else if (parseInt(a[a.length - 1 - idx]) + parseInt(b[b.length - 1 - idx]) + rem === 3) {
      return addBinary(a, b, idx + 1, 1 + str, rem = 1)
    }
  }
  // all other cases
  else {
    if (parseInt(a[a.length - 1 - idx]) + parseInt(b[b.length - 1 - idx]) === 0) {
      return addBinary(a, b, idx + 1, 0 + str)
    }
    else if (parseInt(a[a.length - 1 - idx]) + parseInt(b[b.length - 1 - idx]) === 1) {
      return addBinary(a, b, idx + 1, 1 + str)
    }
    else if (parseInt(a[a.length - 1 - idx]) + parseInt(b[b.length - 1 - idx]) === 2) {
      return addBinary(a, b, idx + 1, 0 + str, rem = 1)
    }
  }
}

console.log("FINAL PRODUCT", addBinary(a, b))
