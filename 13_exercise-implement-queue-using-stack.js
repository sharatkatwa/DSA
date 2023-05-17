class QueueUsingStack {
  constructor() {
    this.stack1 = []
    this.stack2 = []
  }
  peek() {
    return this.stack1[0]
  }
  push(value) {
    this.stack1.push(value)
    return
  }
  pop() {
    const length = this.stack1.length
    for (let i = 0; i < length; i++) {
      const popedItem = this.stack1.pop()
      this.stack2.push(popedItem)
    }
    this.stack2.pop()
    for (let i = 0; i < length - 1; i++) {
      const popedItem = this.stack2.pop()
      this.stack1.push(popedItem)
    }

    return
  }
}

const myQueue = new QueueUsingStack()
myQueue.push(2)
myQueue.push(4)
myQueue.push(6)
myQueue.push(8)
myQueue.pop()
myQueue.pop()
myQueue.pop()

console.log(myQueue)
