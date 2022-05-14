/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 快慢指针，fast 每次跑两步，slow 跑一步，如果是环形链 fast 总会追上 slow
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head) {
    return false
  }
  let fast = head,
    slow = head
  // 注意判断 fast 的值
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
    if (fast === slow) return true
  }

  return false
}

var hasCycle = function (head) {
  if (!head) {
    return false
  }
  let map = new Map()
  while (head && head.next) {
    if (map.has(head.val)) {
      return true
    }
    map.set(head, 1)
    head = head.next
  }
  return false
}

var hasCycle = function (head) {
  if (!head) {
    return false
  }
  const newData = Symbol('')
  while (head) {
    if (head.val === newData) return true
    head.val = newData
    head = head.next
  }

  return false
}
