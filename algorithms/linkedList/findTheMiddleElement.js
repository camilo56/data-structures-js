//https://coderbyte.com/algorithm/linked-list-middle-element

var LinkedList = require("../../structures/LinkedList");

function findTheMiddleElement(){
    var _iterations = 0;
    var nLinkedList;

    return Object.create({
            fill([first, ...items] = [undefined, []]) {
                nLinkedList = LinkedList(first);
                items.forEach(element => nLinkedList.insert(element));
            },

            findMiddle() {
                let slowPointer = nLinkedList.head;
                let fastPointer = nLinkedList.head;
                
                while(slowPointer.next !== null && fastPointer.next !== null && fastPointer.next.next !== null){
                    slowPointer = slowPointer.next;
                    fastPointer = fastPointer.next.next;
                    _iterations++;
                }

                return slowPointer;
            },

            clear(){
                _iterations = 0;
                nLinkedList = null;
            },

            get iterations(){
                return _iterations;
            }
        });

}

module.exports = findTheMiddleElement();