
function LinkedList(value){
    const newNode = (value, next = null) => ({value, next})
    const firstNode = newNode(value)
    //private properties
    let _tail = _head = firstNode;
    let _length = 1;

    return  Object.create({
                insert(value = false) {
                    if(value == false){return}

                    const node = newNode(value);
                    _tail.next = node;
                    _tail = node;
                    _length++;
                    return node;
                },
                insertHead(value){
                    const node = newNode(value, _head);
                    _head = node;
                    _length++;
                },
                removeHead(){
                    if(!_head){return }

                    _length--;
                    _head = _head.next;
                },
                remove(value){
                    let dummies = newNode("", _head);
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
                    _tail = current;;
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
                show(){console.log(JSON.stringify(_head, null, 1))},
            })

}

module.exports = LinkedList;
