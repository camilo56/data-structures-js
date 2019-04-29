var Node = require("../utils/Node");

function LinkedList(firstNode = Node()){
    //private properties
    let _tail = _head = firstNode;
    let _length = 1;

    let methods = Object.create({
        insert(value = false) {
            if(value == false){return}

            const node = Node(value);
            _tail.next = node;
            _tail = node;
            _length++;
            return node;
        },
        insertHead(value){
            const node = Node(value, _head);
            _head = node;
            _length++;
            return _head;
        },
        removeHead(){
            if(!_head){return }

            _length--;
            _head = _head.next;
        },
        remove(value){
            let dummies = Node("", _head);
            let current = dummies;
            
            while(current.next && current.next.value !== value){
                current = current.next;
            }

            if(current.next.value === value){
                current.next = current.next.next;
            }

            _head = dummies.next;

        },
        removeTail(){
            let current = _head;
            if(!current){return}
            
            _length--;
            while(current.next !== _tail){ current = current.next };

            current.next = null;
            let oldTail = _tail;
            _tail = current;
            return oldTail;
        },
        contain(value){
            let current = _head;

            while(current && current.value !== value){
                current = current.next;
            }

            return current? current.value === value: false;
        },
        get length(){
            return _length;
        },
        clean(){
            _tail = _head = firstNode;
            _length = 1;
        },
        get head(){
            return _head;
        },
        show(){return JSON.stringify(_head)},
    })

    return  Object.assign(methods, firstNode);

}

module.exports = LinkedList;
