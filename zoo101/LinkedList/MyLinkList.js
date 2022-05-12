/**
 * 链表元素
 *
 * @class Node
 */
class Node {
  constructor(el) {
    this.el = el
    this.next = null
  }
}

/**
 * 设计单向链表
 *
 * @class MyLinkedList
 */
class MyLinkedList {
  constructor() {
    this.head = new Node("head")
  }

  find(item) {
    let currentNode = this.head
    while (currentNode && currentNode.el !== item) {
      currentNode = currentNode.next
    }
    return currentNode
  }

  insert(item, target) {
    // 注意：构造节点
    const newNode = new Node(item)
    const currentNode = this.find(target)
    // 注意：节点关系
    newNode.next = currentNode.next
    currentNode.next = newNode
  }

  findPrev(item) {
    let currentNode = this.head
    // 注意：判断 next 非空
    while (currentNode.next !== null && currentNode.next.el !== item) {
      currentNode = currentNode.next
    }
    return currentNode
  }

  delete(target) {
    const preNode = this.findPrev(target)
    // 注意：判断 next 非空
    if (prevNode.next !== null) {
      preNode.next = preNode.next.next
    }
  }
}

const linked = new MyLinkedList()
linked.insert(1, 'head')
console.log('linked :>> ', linked);