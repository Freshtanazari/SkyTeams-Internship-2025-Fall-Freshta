const Stack = require('./question_18')

class Queue{
    // implementing a queue using two stacks
    constructor(){
        this.stack1 = new Stack();
    }
    // add one item
    enqueue(item){
        this.stack1.push(item)
    }

    // remove the first added item 
    dequeue(){
        let stack2 = new Stack()
        while(! this.stack1.isEmpty()){
            let item = this.stack1.pop()
            stack2.push(item)
        }
        let firstItem = stack2.pop()
        while(! stack2.isEmpty()){
            let item = stack2.pop()
            this.stack1.push(item)
        }
        return firstItem
    }
    // returning the first item
    peek(){
        let firstItem = this.dequeue()
        this.enqueue(firstItem)
        return firstItem
    }

    //check if the queue is empty
    isEmpty(){
        return (this.stack1.size() == 0 ? true : false)

    }
    displayQueue(){
        return this.stack1
    }
}

module.exports = Queue;

let queue = new Queue()

queue.enqueue("first book")
queue.enqueue("second book")
queue.enqueue("third book")

console.log(queue.peek())

console.log(queue.displayQueue())