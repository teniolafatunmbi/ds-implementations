class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        // check if the head is not null
        if (this.head !== null) {
            // add an element to with a pointer set to null
            let newNode = new Node(value)
            
            // set the tail pointer to newNode.
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;

            // increment the length
            return this.length++;
        }
        
    }

    prepend(value) {
        // check if the head is not null
        if (this.head !== null) {
            // add an element to with a pointer to the head.
            let newNode = new Node(value);

            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;

            // increment the length
            return this.length++;
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

    insert(index, value) {
        // if index is less than or equal to zero, insert beginning
        if (index <= 0) {
            return this.prepend(value);
        }

        // if the index is greater than the length of the linkedlist, insert at the end
        if (index >=this.length) {
            return this.append(value);
        }

        // else
        let pos = 0;
        let newNode = new Node(value);
        let leadingNode = this.head;
        
        // use the currNode(the starting element) to traverse through the list
        while (leadingNode.next !== null) {
            // if pos is equal to the index of the element before the actual index
            if (pos === index-1) {
                // select the node at the actual index and currNode -> NewNode -> nextNode
                let follower = leadingNode.next;
                leadingNode.next = newNode;
                newNode.prev = leadingNode; // linking to prev 
                newNode.next = follower;

                return newNode;
            }

            currNode = currNode.next;
            pos++;
        }
        return this.length++;
    }

    delete(index) {
        // if index is not within linkedlist length
        if (index > this.length) {
            throw Error('index out of range');
        }

        let pos = 0;
        let leadingNode = this.head;

        if (index === 0) {
            this.head = leadingNode.next;
        }

        // traverse up till index-1
        while (leadingNode.next !== null) {
            if(pos === index-1) {
                // * - * - * 
                //    \  /
                let indexedNode = leadingNode.next;
                let follower = indexedNode.next;
                leadingNode.next = follower;
                follower.prev = leadingNode;
                indexedNode.prev = null

                return leadingNode
            }

            // shift pointer position and increment position
            leadingNode = leadingNode.next;
            pos++;
        }

        return this.length--;
    }
}

const newLinkedList = new DoublyLinkedList(10);
newLinkedList.append(20);
newLinkedList.prepend(30);
newLinkedList.insert(1, 40);
newLinkedList.delete(2);
newLinkedList.printList();
