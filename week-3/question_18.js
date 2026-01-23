class Stack{
    
    constructor(){
        this.stack = []
        this.size = 0
    }

    push(item ){
        this.stack[this.size] = item ;
        this.size += 1;
    }

    pop(){
        if (stack.size < 1) {
            return "the stack is empty"
        }
        let temp = this.stack[this.size - 1];
        this.stack.splice(this.size-1, 1)
        this.size -= 1;
        return temp; 
    }

    peek(){
        if (stack.size < 1) {
            return "the stack is empty"
        }
        return this.stack[this.size -1 ];
    }
    isEmpty(){
        return this.size === 0 
    }
    displayStack(){
        if (stack.size < 1) {
            return "the stack is empty"
        }
        return this.stack
    }
    
}
module.exports =  Stack;

const stack = new Stack()

stack.push("B")
stack.push("c")
stack.push(true)

console.log(stack.isEmpty())
console.log(stack.displayStack())
stack.pop()
console.log(stack.displayStack())
stack.pop()
console.log(stack.peek())


