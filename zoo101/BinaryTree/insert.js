function insert(data) {
  const newNode = new Node(data)
  if (this.tree === null) {
    this.tree = newNode
    return
  }
  let node = this.tree
  while (node !== null) {
    if (data > node.data) {
      if (node.right === null) {
        node.right = newNode
        return
      }
      node = node.right
    } else {
      if (data < node.data) {
        if (node.left === null) {
          node.left = newNode
          return
        }
        node = node.left
      }
    }
  }
}
