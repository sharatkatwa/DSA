class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.length = 0
  }
  peek() {
    return this.first
  }
  enqueue(value) {
    const newNode = new Node(value)
    if (this.length === 0) {
      this.first = newNode
      this.last = newNode
      this.length++
      return
    }
    this.last.next = newNode
    this.last = this.last.next
    this.length++
    return
  }
  dequeue() {
    if (this.length <= 1) {
      this.first = null
      this.last = null
      this.length = 0
      return
    }
    this.first = this.first.next
    this.length--
    return
  }
  //isEmpty;
}

const myQueue = new Queue()

myQueue.enqueue('joy')
myQueue.enqueue('Matt')
myQueue.enqueue('Pavel')
myQueue.enqueue('Samir')
myQueue.dequeue()
myQueue.dequeue()
myQueue.dequeue()
myQueue.dequeue()

console.log(myQueue)

//Joy
//Matt
//Pavel
//Samir
