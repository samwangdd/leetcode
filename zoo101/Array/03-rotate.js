function rotate(matrix) {
  // 正向对称：先根据斜对角线（从左上到右下）对称，然后根据垂直中线对称
  const len = matrix.length;
  // 调换对角线元素
  // 难点一：如何描述对角线元素的调换
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      if (i === j) continue;
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  // 调换每行元素
  // 难点二：如何描述每行元素的调换
  for (let k = 0; k < len; k++) {
    for (let l = 0; l < Math.floor(len / 2); l++) {
      [matrix[k][l], matrix[k][len - 1 - l]] = [
        matrix[k][len - 1 - l],
        matrix[k][l],
      ];
    }
  }
}
