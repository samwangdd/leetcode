/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let landNum = 0;

  for (let i = 0; i < grid.length; i++) {
    const len = grid[i].length;
    for (let j = 0; j < len; j++) {
      const target = grid[i][j];
      if (target === "1") {
        spread(grid, i, j);
        landNum++;
      }
    }
  }
  return landNum;
};

/**
 * @param {character[][]} grid
 * @param {number} i
 * @param {number} j
 */
function spread(grid, i, j) {
  if (
    i < 0 ||
    j < 0 ||
    i >= grid.length ||
    j >= grid[i].length ||
    grid[i][j] !== "1"
  ) {
    return;
  }

  grid[i][j] = "0";
  spread(grid, i, j + 1);
  spread(grid, i, j - 1);
  spread(grid, i + 1, j);
  spread(grid, i - 1, j);
}
