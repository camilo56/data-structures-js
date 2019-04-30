//https://coderbyte.com/algorithm/linked-list-middle-element

function findTheMiddleElement(){
    var _iterations = 0;

    return {
            find(linkedList) {
                let slowPointer = linkedList.head;
                let fastPointer = linkedList.head;
                
                while(slowPointer.next !== null && fastPointer.next !== null && fastPointer.next.next !== null){
                    slowPointer = slowPointer.next;
                    fastPointer = fastPointer.next.next;
                    _iterations++;
                }

                return slowPointer;
            },

            clear(){
                _iterations = 0;
            },

            get iterations(){
                return _iterations;
            }
        }
}

module.exports = findTheMiddleElement();