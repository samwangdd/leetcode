/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// 快慢指针
var removeNthFromEnd = function (head, n) {
  let slow = head,
    fast = head
  // fast 后移 n
  while (n--) {
    fast = fast.next
  }
  // 如果 n 等于链表的长度，即删除的是头节点时，通过上面操作，fast 已经为 null
  if (!fast) {
    return head.next
  }
  while (fast.next) {
    slow = slow.next
    fast = fast.next
  }
  slow.next = slow.next.next
  // 返回 slow ?
  return head
}

// FIXME: unCorrect
var removeNthFromEnd = function (head, n) {
  let count = 1

  // 链表有没有 length？
  const length = lengthOfChain(head)
  // 怎么找到倒数第 n+1 个节点
  if (count === length - n - 1) {
  }
}

function lengthOfChain(head) {
  let length = 0
  while (head) {
    length++
    head = head.next
  }
  return length
}
