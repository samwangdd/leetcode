/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let positiveStr = ""
  let reverseStr = ""
  while (head) {
    const nodeVal = head.val
    positiveStr += nodeVal
    reverseStr = nodeVal + reverseStr
    head = head.next
  }
  return positiveStr === reverseStr
}
