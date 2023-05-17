class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

// MY SOUTION FOR STACK IMPLEMNTATION (Course solution is also almost same as my solution)
class Stack {
  constructor() {
    this.top = null
    this.bottom = null
    this.length = 0
  }
  peek() {
    return this.top
  }
  push(value) {
    const newNode = new Node(value)
    if (this.length === 0) {
      this.top = newNode
      this.bottom = this.top
      this.length++
      return
    }
    newNode.next = this.top
    this.top = newNode
    this.length++
    return
  }
  pop() {
    if (this.length <= 1) {
      this.top = null
      this.bottom = null
      this.length--
      return
    }
    this.top = this.top.next
    this.length--
    return
  }
  //isEmpty
}

// const myStack = new Stack()
// myStack.push('google')
// myStack.push('udemy')
// myStack.push('discord')
// myStack.push('twitter')
// myStack.pop()
// myStack.pop()
// myStack.pop()
// // console.log(myStack.peek())
// console.log(myStack)

//Discord
//Udemy
//google

// MY SOLUTION AND COURSE SOLUTION FOR IMPLEMENTING STACK USING ARRAY
class ArrayStack {
  constructor() {
    this.array = []
  }
  peek() {
    return this.array[this.array.length - 1]
  }
  push(value) {
    this.array.push(value)
    return
  }
  pop() {
    this.array.pop()
    return
  }
}

const myArrayStack = new ArrayStack()
myArrayStack.push('google')
myArrayStack.push('micro')
myArrayStack.push('apple')
myArrayStack.pop()
myArrayStack.pop()
myArrayStack.pop()
console.log(myArrayStack)
