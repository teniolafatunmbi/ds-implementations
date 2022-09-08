class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class SinglyLinkedList {
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
        let currNode = this.head;
        
        // use the currNode(the starting element) to traverse through the list
        while (currNode.next !== null) {
            // if pos is equal to the index of the element before the actual index
            if (pos === index-1) {
                // select the node at the actual index and currNode -> NewNode -> SelectedNode
                let nextNode = currNode.next;
                currNode.next = newNode;
                newNode.next = nextNode;

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
            return Error('index out of range');
        }

        let pos = 0;
        let ptr = this.head;

        if (index === 0) {
            this.head = ptr.next;
        }

        // traverse up till index-1
        while (ptr.next !== null) {
            if(pos === index-1) {
                // * - * - * 
                //    \  /
                let indexedNode = ptr.next;
                ptr.next = indexedNode.next;

                return ptr
            }

            // shift pointer position and increment position
            ptr = ptr.next;
            pos++;
        }

        return this.length--;
    }

    reverse() {
        if(!this.head.next) {
            return this.head;
        }

        // hold reference to prev, next, and curr
        let first = this.head;
        this.tail = this.head;
        let next = first.next;

        while (next !== null) {
            // swap the referenced variables
            let temp = next.next;
            next.next = first;
            first = next;
            next = temp;

        }

        // set head.next to null (making it the tail) and set head to first 
        this.head.next = null;
        this.head = first

        return this.printList();
    }
}

const newLinkedList = new SinglyLinkedList(10);
newLinkedList.append(20);
newLinkedList.prepend(30);
newLinkedList.insert(0, 40);
newLinkedList.delete(2);
newLinkedList.printList();
newLinkedList.reverse();

