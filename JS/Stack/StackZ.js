class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

/**
 * Implemented of the Stack ADT with an array
 */
class Stack {
    constructor() {
        this.array = []
        this.length = 0;
    }

    /**
     * Returns the last element in the stack
     * @returns The last element in the stack
     */
    peek() {
        return this.array[this.length-1];
    }

    /**
     * 
     * @returns 
     */
    printStack() {
        console.log(this.array);
        return this.array;
    }

    /**
     * Adds a value to the top of the stack
     * @param {int|string} value 
     * @returns 
     */
    push(value) {
        this.array.push(value);
        return this.length++;
    }

    /**
     * Removes the last element from the stack
     * @returns 
     */
    pop() {
        this.array.pop();
        return this.length--;
    }

    /**
     * Returns a boolean indicating whether the stack is empty or not
     * @returns {Boolean}
     */
    isEmpty() {
        return this.length === 0;
    } 
}

const myStack = new Stack()
myStack.push(5);

myStack.push(10);
myStack.push(15);
myStack.push(20);
myStack.pop();


// console.log(myStack.peek())
console.log(myStack)
myStack.printStack();