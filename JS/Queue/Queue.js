class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    /**
     * 
     * @returns 
     */
     printQueue() {
        const array = [];
        let currentNode = this.first;
        while (currentNode !== null) {
            array.push(currentNode);
            currentNode = currentNode.next;
        }

        console.log(array);
        return array;
    }

    /**
     * Prints the first element in the queue
     */
    peek() {
        return this.first;
    }

    /**
     * Adds a new element to the end of the queue
     * @param {int|string} value 
     * 
     */
    enqueue(value) {
        const newNode = new Node(value);

        if(this.isEmpty()) {
            this.first = newNode;
            this.last = newNode;

            return this.length++;
        } 

        let currNode = this.last;
        currNode.next = newNode;
        this.last = newNode;

        return this.length++;
    }

    /**
     * Removes the first element in the queue from the top
     */
    dequeue() {
        if (this.isEmpty()){
            throw new Error('Queue is empty');
        }

        if(this.first === this.last) {
            this.last = null;
        }

        let ptr = this.first;
        let follower = this.first.next;

        this.first = follower;
        
        this.length--;

        return ptr;
    }

    /**
     * Returns a boolean indicating whether the queue is empty or not
     * @returns {Boolean}
     */
    isEmpty() {
        return this.length === 0;
    }
}

const myQueue = new Queue();
myQueue.enqueue(5);
myQueue.enqueue(10);
myQueue.enqueue(15);
myQueue.enqueue(25);
myQueue.dequeue()
myQueue.dequeue()


// console.log(myQueue)
myQueue.printQueue()