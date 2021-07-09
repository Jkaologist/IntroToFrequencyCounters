// Given a signed 32-bit integer x, return x with its digits reversed.
// If reversing x causes the value to go outside the signed
// 32-bit integer range [-231, 231 - 1], then return 0.

function reverse(val) {
  // catches all length 1 and returns immediately
  if (val.length === 1) {
    return val
  }
  // use a string to create a return
  let forward = val.toString()
  let negative = ''
  // catch negative values for reversal and return the neg after reversal
  if (forward[0] === "-") {
    negative = '-'
    forward = forward.slice(1)
    // screen out of bounds
    if (parseInt(strReverse(forward)) >= 2147483648) {
      return 0
    }
    let out = negative + strReverse(forward)
    return parseInt(out)
  }
  // screen if reversed is out of bounds
  let output = parseInt(strReverse(forward))
  if (output <= 2147483648) {
    return output
  }
  return 0
}

// backwards loop to gather reversal vals from string
function strReverse(str) {
  let out = ''
  for (let i = str.length - 1; i >= 0; i--) {
    out += str[i]
  }
  return out
}

module.exports = reverse
