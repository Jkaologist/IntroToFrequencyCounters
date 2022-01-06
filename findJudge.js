const findJudge = (n, trust) => {
  let notJudge = {};
  for (let relationship of trust) {
    notJudge[relationship[1]] = [...notJudge[relationship1], relationship[0]];
  }
  console.log(notJudge);

  if (notJudge.length === n - 1) {
    console.log(notJudge);
    for (let i = 1; i <= n; i++) {
      if (!(i in notJudge)) {
        return i;
      }
    }
  }
  return -1;
};

console.log(
  findJudge(
    3,
    (trust = [
      [1, 3],
      [2, 3],
    ])
  )
); //3
