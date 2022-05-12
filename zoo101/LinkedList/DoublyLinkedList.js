/**
 * 链表元素
 *
 * @class Node
 */
class Node {
  constructor(el) {
    this.el = el
    this.next = null
    this.prev = null
  }
}

/**
 * 设计双向链表
 *
 * @class DoublyLinkedList
 */
class DoublyLinkedList {
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
    currentNode.next = newNode
    newNode.prev = currentNode

    // 注意顺序
    newNode.next = currentNode.next
    currentNode.next.prev = newNode
  }

  delete(target) {
    const node = this.find(target)
    console.log('node :>> ', node);
    node.prev.next = node.next
    node.next.prev = node.prev
    node.next = null
    node.prev = null
  }
}

const linked = new DoublyLinkedList()
linked.insert(1, "head")
linked.insert(2, 1)
console.log("linked :>> ", linked)
console.log("linked :>> ", linked.find(2))
linked.delete(1)
console.log("linked ---:>> ", linked)