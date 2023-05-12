// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };

// My solution not completed
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    }
    this.tail = this.head
    this.length = 1
  }
  append(value) {
    if (this.head.next === null) {
      this.head.next = { value, next: null }
    }
    console.log(this.head[0])
    this.tail = { value, next: null }
    this.length += 1
  }
}

// COURSE SOLUTION O(1) - TIME COMPLEXITY
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
    return console.log(array)
  }

  append(value) {
    const newNode = { value, next: null }
    this.tail.next = newNode
    this.tail = newNode
    this.length++
  }
  prepend(value) {
    const newNode = { value, next: null }
    newNode.next = this.head
    this.head = newNode
    this.length++
  }

  // // MY SOLUTION TO INSERT IN SPECIFIED INDEX O(n) - time complexity
  // insert(index, value) {
  //   if(index === 0){
  //     return this.prepend(value)
  //   }
  //   if(index >= this.length -1){
  //     return this.append(value)
  //   }
  //   const newNode = { value, next: null }
  //   let currentNode = this.head
  //   for (let i = 0; i < this.length; i++) {
  //     if (i === index - 1) {
  //       console.log(currentNode)
  //       newNode.next = currentNode.next
  //       currentNode.next = newNode
  //       this.length++
  //       return
  //     }
  //     currentNode = currentNode.next
  //   }
  // }

  // COURSE SOLUTION TO INSERT IN SPECIFIED INDEX O(n) - time complexity
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
  // MY SOLUTION(almost same as course solution) TO REMOVE THE ITEM FROM LINKED LIST O(n) - time complexity
  remove(index) {
    if (index === 0) {
      this.head = this.head.next
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
}

let MyLinkedList = new LinkedList2(10)

MyLinkedList.append(23)
// MyLinkedList.prepend(50)
// MyLinkedList.prepend(99)
MyLinkedList.append(72)
// MyLinkedList.insert(3, 33)
// MyLinkedList.insert(1, 75)

// MyLinkedList.append(45)

MyLinkedList.printList()
