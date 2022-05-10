/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// 使用辅助函数，找规律
var rotate = function (matrix) {
  const n = matrix.length
  const newMatrix = new Array(n).fill(0).map(() => new Array(n).fill(0))

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      newMatrix[j][n - 1 - i] = matrix[i][j]
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      matrix[i][j] = newMatrix[i][j]
    }
  }
  return matrix
}

// 水平翻转 + 对角线翻转
var rotate = function (matrix) {
  const n = matrix.length
  // 水平翻转
  for (let i = 0; i < Math.floor(n / 2); i++) {
    for (let j = 0; j < n; j++) {
      [matrix[i][j], matrix[n - 1 - i][j]] = [
        matrix[n - 1 - i][j],
        matrix[i][j],
      ]
    }
  }
  // 对角线翻转
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      [matrix[j][i], matrix[i][j]] = [matrix[i][j], matrix[j][i]]
    }
  }

  return matrix
}

// unCorrect
var rotate = function (matrix) {
  // 纵向循环，倒序
  // 如何每次把第一个元素放到数组中？
  const length = matrix.length
  let j = 0
  while (j < length) {
    for (let i = length - 1; i > 0; i--) {
      const element = matrix[i]
      const arr = []
      while (arr.length < length) {
        arr.push(element[j])
      }
    }
  }
}
