//https://coderbyte.com/algorithm/linked-list-middle-element

var LinkedList = require("../../structures/LinkedList");

function findTheMiddleElement(){
    var _iterations = 0;
    var listOne;
    var listTwo;

    return Object.create({
            fill(lOne = [], lTwo = []) { 
                let [firstOne, ...otherOne] = lOne; 
                let [firstTwo, ...otherTwo] = lTwo;
                
                console.log("firstOne", firstOne, otherOne);
                console.log("firstTwo", firstTwo, otherTwo);

                listOne = LinkedList(firstOne);
                listTwo = LinkedList(firstTwo);

                
                otherOne.forEach(element => listOne.insert(element));
                otherTwo.forEach(element => listTwo.insert(element));
            },
            
            mergeAndSort() {
                let newOne = LinkedList("camilo");
                console.log(listOne.show())
                console.log(listTwo.show())
/*                 while(listOne !== null && listTwo !== null){
                    if(listOne.value <= listTwo.value){
                        newOne.insert(listOne.value);
                        listOne = listOne.next;
                    }else{
                        newOne.insert(listTwo.value);
                    }
                    console.log("--- newOne ---", newOne.value)
                    newOne = newOne.next
                    _iterations++;
                }

                if(listOne === null){ newOne = listTwo}
                if(listTwo === null){ newOne = listOne} */

                /* return newOne.next; */
            },

            clear(){
                _iterations = 0;
                listOne = null;
                listTwo = null;
            },

            get iterations(){
                return _iterations;
            }
        });

}

module.exports = findTheMiddleElement();