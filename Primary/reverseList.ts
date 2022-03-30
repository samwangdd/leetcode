/**
 * https://leetcode-cn.com/problems/reverse-linked-list/solution/
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 迭代
 * 
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null
  let cur = head
  while (cur) {
    const next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }
  return prev
}

// 递归
var reverseList2 = function (head) {
  if (head == null || head.next == null) {
    return head
  }
  // 假设：通过递归获得后面链表的新 head
  let newHead = reverseList(head.next)
  // 改变 head.next 指针
  head.next.next = head
  // 切断原来的指针
  head.next = null

  return newHead
}
