function addBinary2(a, b) {
  return BigInt(int2Binary(BigInt(binaryToInt(a)) + BigInt(binaryToInt(b))));
}

function binaryToInt(strIn, idx = 0, sum = BigInt(0)) {
  if (idx >= strIn.length) {
    return sum
  }
  if (parseInt(strIn[idx]) != 0) {
    sum += BigInt(2) ** BigInt(strIn.length - idx - 1)
  }
  return binaryToInt(strIn, idx + 1, sum)
}


function int2Binary(intIn = 0n, strOut = "") {
  if (intIn <= 1) {
    return intIn + strOut
  }
  let quo = (intIn / 2n) | 0n;
  let reminder = (intIn % 2n) | 0n;
  return int2Binary(quo, reminder.toString() + strOut);
}

console.log(addBinary2("101", "11"));
