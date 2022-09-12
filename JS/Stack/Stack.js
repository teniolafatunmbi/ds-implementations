class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

/**
 * Implemented of the Stack ADT with a Linkedlist
 */
class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    /**
     * Returns the last element in the stack
     * @returns The last element in the stack
     */
    peek() {
        return this.top;
    }

    /**
     * 
     * @returns 
     */
    printStack() {
        const array = [];
        let currentNode = this.top;
        while (currentNode !== null) {
            array.push(currentNode);
            currentNode = currentNode.next;
        }

        console.log(array);
        return array;
    }

    /**
     * Adds a value to the top of the stack
     * @param {int|string} value 
     * @returns 
     */
    push(value) {
        // create a new node with value
        const newNode = new Node(value);
        if(this.isEmpty()) {        // set new node to bottom if bottom == null
            this.bottom = newNode
            this.top = newNode;
            return this.length++;
        }

        let currNode = this.top;
        this.top = newNode
        this.top.next = currNode;

        return this.length++;

    }

    /**
     * Removes the last element from the stack
     * @returns 
     */
    pop() {
        // set this.bottom to null if this.bottom.next == null
        if(this.isEmpty()) {
            throw new Error('This stack is empty');
        }

        if(this.top === this.bottom) {
            this.bottom = null
        }

        let ptr = this.top;
        this.top = this.top.next;

        console.log(ptr.value)
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
myStack.pop();
myStack.pop();
myStack.pop();


// console.log(myStack.peek())
console.log(myStack)
myStack.printStack();