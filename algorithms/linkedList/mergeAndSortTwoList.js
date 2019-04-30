//https://coderbyte.com/algorithm/linked-list-middle-element

var LinkedList = require("../../structures/LinkedList.class");

function findTheMiddleElement(){
    var _iterations = 0;

    return {
            merge(listOne = null, listTwo = null) {
                let newOne = new LinkedList();
                if(listOne == null && listTwo == null){ return null}
                
                while(listOne !== null  && listTwo !== null ){
                    if(listOne.value <= listTwo.value){
                        newOne.insert(listOne.value);
                        listOne = listOne.removeHead ? listOne.removeHead(): listOne.next;
                    }else{
                        newOne.insert(listTwo.value);
                        listTwo = listTwo.removeHead ? listTwo.removeHead(): listTwo.next;
                    }

                    _iterations++;
                }

                let nextData = null;
                if(listOne === null){ nextData = {"value": listTwo.value, "next": listTwo.next} }
                if(listTwo === null){ nextData = {"value": listOne.value, "next": listOne.next} }
                
                newOne.insertNode(nextData);

                newOne.removeHead();
                return newOne;
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