var Node = require("../utils/Node");

function LinkedList(_head = Node(),  _tail, _length = 1){
    //private properties
    _tail = _head;

    isNotNode = node => {
        return node == false || typeof node !== "object" ||
                !node.hasOwnProperty("value") || !node.hasOwnProperty("next") 
    }

    let methods = Object.create({
        insert(value = false) {
            if(value == false){return}
            
            const node = Node(value);
            _tail.next = node;
            _tail = node;
            _length++;
            return _tail;
        },
        insertNode(node = false){
            if(isNotNode(node)){return null}

            _tail.next = node;
            _tail = node;
            _length++;
            return _tail;
        },
        insertHead(value){
            const node = Node(value, _head);
            _head = node;
            _length++;
            return _head;
        },
        removeHead(){
            if(!_head){return null}

            _length--;

            return _head = _head.next;
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
            _tail = _head;
            _length = 1;
        },
        get head(){
            return _head;
        },
        get tail(){
            return _tail;
        },
        show(){return JSON.stringify(_head)},
    })

    let newNode = Object.assign(methods, _head);

    Object.defineProperty(newNode, 'next', {
        get: () => {
          return _tail;
        },
        set: function(node) {
            return this.insertNode(node)
        }
    });
    
    Object.defineProperty(newNode, 'value', {
        get: () => {
          return _head.value;
        },
        set: function(value) {
            _head.value = value;
        }
    });


    return newNode;

}

module.exports = LinkedList;
