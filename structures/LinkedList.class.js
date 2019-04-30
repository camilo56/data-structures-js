var Node = require("../utils/Node");

class LinkedList{
    constructor(value){
        this.tail = this.head = Node(value);
        this.length = 1;
    }

    insert(value = false) {
        if(value == false){return}
        
        const node = Node(value);
        
        this.tail.next = node;
        this.tail = node;
        this.length++;
        return this.tail;
    }

    insertNode(node = false){
        if(this.isNotNode(node)){return null}

        this.tail.next = node;
        this.tail = node;
        this.length++;
        return this.tail;
    }

    insertHead(value){
        const node = Node(value, this.head);
        this.head = node;
        this.length++;
        return this.head;
    }

    removeHead(){
        if(!this.head){return null}

        this.length--;

        return this.head = this.head.next;
    }

    remove(value){
        let dummies = Node("", this.head);
        let current = dummies;
        
        while(current.next && current.next.value !== value){
            current = current.next;
        }

        if(current.next.value === value){
            current.next = current.next.next;
            this.length--;
        }

        this.head = dummies.next;
    }

    removeTail(){
        let current = this.head;
        if(!current){return}
        
        this.length--;
        while(current.next !== this.tail){ current = current.next };

        current.next = null;
        let oldTail = this.tail;
        this.tail = current;
        return oldTail;
    }

    contain(value){
        let current = this.head;

        while(current && current.value !== value){
            current = current.next;
        }

        return current? current.value === value: false;
    }

    isNotNode(node){
        return node == false || typeof node !== "object" ||
                !node.hasOwnProperty("value") || !node.hasOwnProperty("next") 
    }

    show(){return JSON.stringify(this.head)}

    get value(){
        if(!this.head){return null}

        return this.head.value
    }
    
    get next(){
        if(!this.head){return null}

        return this.head.next
    }
}

module.exports = LinkedList;
