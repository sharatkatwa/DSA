// create doubly linked list like below
// linkedList = {
//   Head:{
//     previous:null,
//     value: 32,
//     next: {
//       previous: 32,
//       value:83,
//       next:null
//     }
//   }
// }

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      prev: null,
      value: value,
      next: null,
    }
    this.tail = this.head
    this.length = 1
  }
  append(value) {
    const newNode = { prev: null, value, next: null }
    this.tail.next = newNode
    newNode.prev = this.tail
    this.tail = newNode
    this.length++
    return
  }
  prepend(value) {
    const newNode = { prev: null, value, next: null }
    this.head.prev = newNode
    newNode.next = this.head
    this.head = newNode
    this.length++
    return
  }

  insert(index, value) {
    if (index === 0) {
      return this.prepend(value)
    }
    if (index >= this.length) {
      return this.append(value)
    }
    const newNode = { prev: null, value, next: null }
    const leader = this.traverseToIndex(index - 1)
    const follower = leader.next
    newNode.prev = leader
    newNode.next = follower
    follower.prev = newNode
    leader.next = newNode
    this.length++
    return
  }

  remove(index) {
    if (index === 0) {
      this.head.next.prev = null
      this.head = this.head.next
      return
    }

    const leader = this.traverseToIndex(index - 1)
    if (index >= this.length - 1) {
      leader.next = null
      this.tail = leader
      this.length--
      return
    }
    leader.next = leader.next.next
    leader.next.prev = leader
    this.length--
    return
  }

  traverseToIndex(index) {
    //Check parameters
    let counter = 0
    let currentNode = this.head
    while (counter !== index) {
      currentNode = currentNode.next
      counter++
    }
    return currentNode
  }
  printList() {
    const array = []
    let currentList = this.head
    while (currentList !== null) {
      array.push(currentList.value)
      currentList = currentList.next
    }
    return console.log(array)
  }
}

const myLinkedList = new DoublyLinkedList(10)
myLinkedList.append(20)
myLinkedList.prepend(42)
myLinkedList.insert(2, 32)
myLinkedList.remove(2)

console.log(myLinkedList)
myLinkedList.printList()
