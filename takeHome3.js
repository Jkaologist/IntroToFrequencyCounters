process.stdin.resume();
process.stdin.setEncoding("utf8");

let stdin = "", str1 = "", str2 = "";
process.stdin
  .on("data", function (chunk) {
    stdin += chunk;
    str1 = chunk.split(";")[0];
    str2 = chunk.split(";")[1];
  })
  .on("end", function () {
    process.stdout.write(`${longestCommonSubsequence(str1, str2)}`);
  });

const longestCommonSubsequence = (str1, str2) => {
  const removeDistinct = (str1, str2) =>
    str1
      .split("")
      .filter((c) => str2.includes(c))
      .join("");
  const findFirstSeq = (str1, str2) => {
    let seq = "";
    let i;
    let j = 0;
    for (i = 0; i < str1.length; i++) {
      const c = str1[i];
      while (j++ < str2.length) {
        if (seq.length + (str2.length - j - 2) < max) {
          return "";
        }
        if (c === str2[j - 1]) {
          seq += c;
          break;
        }
      }
    }
    return seq;
  };
  const findSubseq = (str1, str2) => {
    if (str2.length <= max || str1.length <= max) {
      return maxSeq;
    }
    while (str1.length && str1.length > max) {
      const seq = findFirstSeq(str1, str2);
      if (seq.length > max) {
        max = seq.length;
        str1 = str1.slice(max);
        maxSeq = seq;
      } else {
        str1 = str1.slice(1);
      }
    }
    return maxSeq;
  };
  let max = 0;
  let maxSeq;
  if (str1 === str2) {
    return str1;
  }
  let filteredStr1 = removeDistinct(str1, str2);
  let filteredStr2 = removeDistinct(str2, str1);
  if (filteredStr1 === filteredStr2) {
    return filteredStr1;
  }
  findSubseq(filteredStr1, filteredStr2);
  return findSubseq(filteredStr2, filteredStr1);
};

// test cases
// longestCommonSubsequence("HEYA","HEY");
// longestCommonSubsequence("HEX","HYE");
// longestCommonSubsequence("SHADEY", "QWHURLEY");
// longestCommonSubsequence("XMJYAUZ", "MZJAWXU");

/**
BEFORE LOGIC:  EX HYE H 0 1
VM20:19 AFTER LOGIC:  EX HYE H 0 1
VM20:2 BEFORE LOGIC:  EX HYE H 0 1
VM20:19 AFTER LOGIC:  EX HYE H 0 1
VM20:2 BEFORE LOGIC:  EX HYE H 0 1
VM20:19 AFTER LOGIC:  EX HYE H 0 1
VM20:2 BEFORE LOGIC:  EX HYE H 0 1
VM20:19 AFTER LOGIC:  EX HYE H 0 1
VM20:2 BEFORE LOGIC:  EX HYE H 0 1
VM20:19 AFTER LOGIC:  EX HYE H 0 1
VM20:2 BEFORE LOGIC:  EX HYE H 0 1
VM20:19 AFTER LOGIC:  EX HYE H 0 1
VM20:2 BEFORE LOGIC:  EX HYE H 0 1
 */

// inputs 2 strings
// strings max 50 chars
// strings could possibly be empty? Cover it just in case
// substrings do not have to be contiguous just present in both str
// constraints 1 unique substring
// output longest common substring between the two strings
