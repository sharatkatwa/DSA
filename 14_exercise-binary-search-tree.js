class Node {
  constructor(value) {
    this.left = null
    this.right = null
    this.value = value
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }
  // MY SOLUTION FOR INSERTING DATA (course solution is almost same as mine)
  insert(value) {
    const newNode = new Node(value)
    if (this.root === null) {
      this.root = newNode
      return this
    }

    let currentNode = this.root
    while (currentNode) {
      if (currentNode.value === value) {
        return null
      } else if (value > currentNode.value) {
        if (currentNode.right === null) {
          currentNode.right = newNode
          return
        }
        currentNode = currentNode.right
      } else if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = newNode
          return
        }
        currentNode = currentNode.left
      }
    }
  }

  // MY SOLUTION FOR FINDING DATA
  lookup(value) {
    if (this.root.value === value) {
      return this.root
    }

    let currentNode = this.root
    while (currentNode) {
      if (value > currentNode.value) {
        if (currentNode.right?.value === value) {
          return currentNode.right
        }
        currentNode = currentNode.right ? currentNode.right : null
      } else if (value < currentNode.value) {
        if (currentNode.left?.value === value) {
          return currentNode.left
        }
        currentNode = currentNode.left ? currentNode.left : null
      }
      if (currentNode === null) {
        return false
      }
    }
  }
  // COURSE SOLUTION FOR FINDING THE DATA
  lookup2(value) {
    if (this.root.value === value) {
      return this.root
    }

    let currentNode = this.root
    while (currentNode) {
      if (value > currentNode.value) {
        currentNode = currentNode.right
      } else if (value < currentNode.value) {
        currentNode = currentNode.left
      } else if (value === currentNode.value) {
        return currentNode.value
      }
    }
    return false
  }

  remove(value) {
    if (this.root === null) {
      return false
    }
    let currentNode = this.root
    let parentNode = null
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode
        currentNode = currentNode.left
      } else if (value > currentNode.value) {
        parentNode = currentNode
        currentNode = currentNode.right
      } else if (value === currentNode.value) {
        // current node has no child
        if (!currentNode.right && !currentNode.left) {
          if (parentNode === null) {
            currentNode = null
            return true
          } else if (currentNode.value < parentNode.value) {
            parentNode.left = null
            return true
          } else if (currentNode.value > parentNode.value) {
            parentNode.right = null
            return true
          }
        }
        // currenNode doesn't has the right child
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left
            return true
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left
              return true
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right
              return true
            }
          }
        }
        // right child who doesn't have the left child
        if (!currentNode.right.left) {
          currentNode.right.left = currentNode.left
          if (parentNode === null) {
            this.root = currentNode.right
            return true
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right
              return true
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right
              return true
            }
          }

          // right child who has left child
        } else {
          let leftmost = currentNode.right.left
          let leftmostParent = currentNode.right
          while (leftmost.left !== null) {
            leftmostParent = leftmost
            leftmost = leftmost.left
          }

          leftmostParent.left = leftmost.right
          leftmost.right = currentNode.right
          leftmost.left = currentNode.left

          if (parentNode === null) {
            this.root = leftmost
            return true
          } else if (currentNode.value < parentNode.value) {
            parentNode.left = leftmost
            return true
          } else if (currentNode.value > parentNode.value) {
            parentNode.right = leftmost
            return true
          }
        }
      }
    }
  }
}

const tree = new BinarySearchTree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(100)
tree.insert(15)
tree.insert(1)
tree.remove(20)
// console.log(tree.lookup2(10))
console.log(JSON.stringify(traverse(tree.root)))

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value }
  tree.left = node.left === null ? null : traverse(node.left)
  tree.right = node.right === null ? null : traverse(node.right)
  return tree
}
