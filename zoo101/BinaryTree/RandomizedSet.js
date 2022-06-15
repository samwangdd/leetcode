var RandomizedSet = function () {
  this.arr = []
  this.map = {}
}

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.map[val] >= 0) {
    return false
  } else {
    this.map[val] = this.arr.length
    this.arr.push(val)
    return true
  }
}

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  const i = this.map[val]
  const l = this.arr.length
  if (i >= 0) {
    this.map[this.arr[l - 1]] = i
    this.map[val] = -1 // 表示不存在
    this.arr.splice(i, 1, this.arr[l - 1])
    this.arr.pop()
    return true
  } else {
    return false
  }
}

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const l = this.arr.length
  const i = Math.floor(Math.random() * l)
  return this.arr[i]
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
