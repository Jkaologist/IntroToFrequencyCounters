const numIslands = require("./numIslands")

let grid1 = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
];
let grid2 = [
  ["0", "1", "0", "0", "0"],
  ["0", "0", "0", "1", "0"],
  ["0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];
let grid3 = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

test('counts islands', () => {
  expect(numIslands(grid1)).toBe(1);
})

test('counts islands', () => {
  expect(numIslands(grid2)).toBe(2)
})

test('counts islands', () => {
  expect(numIslands(grid3)).toBe(3)
})
