/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false
  // return [...s].sort().join('') === [...t].sort().join('')
  
  let hash = new Array(26).fill(0)
  for (let i = 0; i < s.length; ++i) {
    hash[s.codePointAt(i) - "a".codePointAt(0)]++
  }
  for (let j = 0; j < t.length; ++j) {
    hash[t.codePointAt(j) - "a".codePointAt(0)]--
    if (hash[t.codePointAt(j) - "a".codePointAt(0)] < 0) return false
  }
  return true
}
