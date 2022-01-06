const trap = (height) => {
  let waterTrapped = 0;
  for (let i = 0; i < height.length; i++) {
    let leftMax = 0,
      rightMax = 0;
    for (let j = i; j >= 0; j--) {
      leftMax = Math.max(leftMax, height[j]);
    }
    for (let k = i; k < height.length; k++) {
      rightMax = Math.max(rightMax, height[k]);
    }
    waterTrapped += Math.min(leftMax, rightMax) - height[i];
  }
  return waterTrapped;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); //6
console.log(trap([4, 2, 0, 3, 2, 5])); //9
