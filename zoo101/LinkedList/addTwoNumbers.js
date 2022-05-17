/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 数字相加法
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  return NumToList(ListToNum(l1) + ListToNum(l2))
}

// 把链表转换成数字字符串；考虑 JS 数字大小，使用 BigInt
function ListToNum(listNode) {
  let numStr = ""
  let currentNode = listNode
  while (currentNode) {
    // 如何表达每次增加 10 倍
    numStr = currentNode.val + numStr
    currentNode = currentNode.next
  }
  return BigInt(numStr)
}

// 把数字转换成链表
function NumToList(number) {
  let listNode = null
  const str = number.toString()
  for (let i = 0; i < str.length; i++) {
    // 如何创建链表，头节点是啥？
    const currentNode = new ListNode(str[i])
    currentNode.next = listNode
    // 为了把下个节点的 next，指向现在的 currentNode
    listNode = currentNode
  }
  return listNode
}

/**
 * 双指针
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let point1 = l1,
    point2 = l2
  // 两数之和
  const sumListNode = new ListNode(0)
  let current = sumListNode
  // 是否有进位
  let carry = 0
  // 如果指针还没移动结束
  while (point1 || point2) {
    const num1 = point1 ? point1.val : 0
    const num2 = point2 ? point2.val : 0
    // 当前位的值
    const sum = carry + num1 + num2
    // 每次都重新计算 carry，储存进位
    carry = Math.floor(sum / 10)
    // sumListNode 添加一个当前 l1 和 l2 相加的node ，值为 sum 的个位数
    current.next = new ListNode(sum % 10)
    // current 指针后移一位，为什么要这么做？？
    current = current.next

    if (point1) {
      point1 = point1.next
    }
    if (point2) {
      point2 = point2.next
    }

    if (carry > 0) {
      current.next = new ListNode(carry)
    }
  }
  return sumListNode.next
}
