/**
 * https://leetcode.cn/leetbook/read/top-interview-questions-easy/xnnbp2/
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// 递归调用
var mergeTwoLists = function (list1, list2) {
  if (list1 === null) {
    return list2
  }
  if (list2 === null) {
    return list1
  }
  if (list1.val <= list2.val) {
    // 如何保留较小者？
    list1.next = mergeTwoLists(list1.next, list2)
    return list1
  } else {
    list2.next = mergeTwoLists(list1, list2.next)
    return list2
  }
}

// 双指针
var mergeTwoLists = function (list1, list2) {
  const prevHead = new ListNode(-1)
  let prevNode = prevHead
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      prevNode.next = list1
      list1 = list1.next
    } else {
      prevNode.next = list2
      list2 = list2.next
    }
    // 为什么要这一步？
    prevNode = prevNode.next
  }
  prevNode.next = list1 || list2

  return prevHead.next
}

// unPass
var mergeTwoLists = function (list1, list2) {
  // 若链表都为空
  if (!list1.val && !list2.val) {
    return { val: 0, next: null }
  }
  // 假设 n-1 已经为递增链表
  head.next = mergeTwoLists(list1.next, list2.next)
  // 递归结束
  if (list1.next !== null || list.next !== null) {
  }
}
