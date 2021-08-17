/**
 * Given an m x n 2D binary grid grid which represents a
 * map of '1's (land) and '0's (water), return the number of islands.
 *
 * An island is surrounded by water and is formed by connecting adjacent lands
 * horizontally or vertically.
 * You may assume all four edges of the grid
 * are all surrounded by water.
 */

// input: grid is an array of subarrays
// output: number of islands
function numIslands(grid) {
  let totalIslands = 0;
  if (grid.length === 0 || grid === null) {
    return totalIslands;
  }
  let offsets = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
  ];
  let height = grid.length;
  let width = grid[0].length;
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      if (grid[row][col] === "0") {
        continue;
      }
      totalIslands++;
      dfs(row, col);
    }
  }
  function dfs(row, col) {
    if (row < 0 || row === height || col < 0 || col === width) {
      return;
    }
    if (grid[row][col] === "0") {
      return;
    }
    grid[row][col] = "0";
    for (let offset of offsets) {
      dfs(row + offset[0], col + offset[1]);
    }
  }
  return totalIslands;
}

module.exports = numIslands;
