// Reverse a singly linked list
class LinkedList2 {
  constructor(value) {
    this.head = {
      value,
      next: null,
    }
    this.tail = this.head
    this.length = 1
  }

  printList() {
    const array = []
    let currentList = this.head
    while (currentList !== null) {
      array.push(currentList.value)
      currentList = currentList.next
    }
    return array
  }

  append(value) {
    const newNode = { value, next: null }
    this.tail.next = newNode
    this.tail = newNode
    this.length++
  }
  prepend(value) {
    const newNode = { value, next: null }
    if (this.length < 2) {
      this.tail = this.head
    }
    newNode.next = this.head
    this.head = newNode
    this.length++
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value)
    }
    const newNode = { value, next: null }
    const leader = this.traverseNode(index - 1)
    const holdingPointer = leader.next
    leader.next = newNode
    newNode.next = holdingPointer
    this.length++
    return
  }
  traverseNode(index) {
    let count = 0
    let currentNode = this.head
    while (count !== index) {
      currentNode = currentNode.next
      count++
    }
    return currentNode
  }
  remove(index) {
    if (index === 0) {
      this.head = this.head.next
      this.length--
      return
    }

    const leader = this.traverseNode(index - 1)
    if (index >= this.length - 1) {
      leader.next = null
      this.tail = leader
      this.length--
      return
    }
    leader.next = leader.next.next
    this.length--
    return
  }
  // MY SOLUTION O(a + b) time complexity (this solution redefines the entire linked list)
  reverse() {
    const arrayList = this.printList()
    for (let i = 0; i < arrayList.length; i++) {
      this.remove(0)
    }
    for (let j = 0; j < arrayList.length; j++) {
      this.prepend(arrayList[j])
    }
  }
  // COURSE SOLUTION (this solution changes only the pointer)
  reverse2() {
    if (!this.head.next) {
      return this.head
    }
    let first = this.head
    this.tail = this.head
    let second = first.next
    while (second) {
      let temp = second.next
      second.next = first
      first = second
      second = temp
    }
    this.head.next = null
    this.head = first
    return
  }
}

const myLinkedList = new LinkedList2(10)

myLinkedList.append(20)
myLinkedList.append(30)
myLinkedList.append(40)
myLinkedList.append(50)

myLinkedList.reverse2()
console.log(myLinkedList)
console.log(myLinkedList.printList())
