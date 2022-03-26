class Node {
    constructor(data, next=null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // insert at head
    insertFirst(data) {
        // creating new node with .next as current head and assigning it as head
        // head gets pushed over if not null
        this.head = new Node(data, this.head);
        this.size++;
        return;
    }

    // insert at tail
    insertLast(data) {
        // creating new node to be inserted
        let newNode = new Node(data);
        
        // if list is empty
        if (this.head === null) {
            this.head = newNode;
            this.size++;
            return;
        }
        
        // if list is not empty
        let current = this.head;
        // getting the last node of list
        while(current.next) {
            current = current.next;
        }
        // inserting new node at tail
        current.next = newNode;
        this.size++;
        return;
    }

    // insert at particular index
    insertAt(data,index) {
        // if index is out of range of LL
        if (index > 0 && index > this.size) {
            return;
        }
        // if the new node is to be inserted at head
        if (index === 0) {
            this.insertFirst(data);
            return;
        }
        // if the new node is to be inserted at tail
        if (index === this.size) {
            this.insertLast(data);
            return;
        }
        // else
        let newNode = new Node(data);
        // .next at index-1 should be newNode
        // newNode.next should be node at index
        let current = this.head;
        let count = 0;
        while(count < index-1) {
            current = current.next;
            count++;
        }
        newNode.next = current.next;
        current.next = newNode;
        
        this.size++;
    }

    // delete node at particular index
    deleteAt(index) {
        // if index is out of range of LL
        if (index > 0 && index > this.size) {
            return;
        }
        
        // if node at head is to be removed
        if (index === 0) {
            this.head = this.head.next;
            this.size--;
            return;
        }

        let current = this.head, counter = 0;
        // getting the node which is to be removed
        while(counter < index-1) {
            current = current.next;
            counter++;
        }
        // removing the link to the node
        current.next = current.next.next;
        this.size--;
        return;
    }

    // print List data
    printListData() {
        let current = this.head; // starting at head

        while(current) {
            console.log(current.data);
            current = current.next; // similar to i++ for arrays
        }
    }
}

let myLL = new LinkedList;
myLL.insertFirst(300);
myLL.insertFirst(200);
myLL.insertFirst(100);
myLL.insertLast(400);
myLL.insertAt(500,4);
myLL.deleteAt(2);

myLL.printListData();
console.log(myLL.size);