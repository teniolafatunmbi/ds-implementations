class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        this.head = { value: value, next: null };
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        // check if the head is not null
        if (this.head !== null) {
            // add an element to with a pointer set to null
            let newNode = new Node(value)
            
            // set the tail pointer to newNode.
            this.tail.next = newNode;
            this.tail = newNode;

            // increment the length
            this.length++;
            return this.length
        }
        
    }

    prepend(value) {
        // check if the head is not null
        if (this.head !== null) {
            // add an element to with a pointer to the head.
            let newNode = new Node(value);
            newNode.next = this.head;
            this.head = newNode;

            // increment the length
            this.length++;
            return this.length
        }
        
    }
    
    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode);
            currentNode = currentNode.next;
        }

        console.log(array);
        return array;
    }

    insertAtIndex(index, value) {
        if (index === 0) {
            this.prepend(value);
            return this.printList();
        }

        if (index >=this.length) {
            return this.append(value);
        }

        if (index > 0 ) {
            let count = 0;
            let newNode = new Node(value);
            let currNode = this.head;
            while (currNode.next !== null) {
                if (count === index-1) {
                    let nextNode = currNode.next;
                    currNode.next = newNode;
                    newNode.next = nextNode;

                    return newNode;
                }
                currNode = currNode.next;
                count ++;
            }

            return this.length;
        }
    }

    deleteAtIndex(index, value) {
        return;
    }

    deleteAtEnd(value, index) {
        return;
    } 
}

const newLinkedList = new LinkedList(10);
newLinkedList.append(20);
newLinkedList.prepend(30);
newLinkedList.insertAtIndex(-1, 40);
newLinkedList.printList();

// console.log(newLinkedList)

// 30 -> 40 -> 10 -> 20