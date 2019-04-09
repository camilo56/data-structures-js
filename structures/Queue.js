
function Queue(){
    //private properties
    let storage =  {};
    let indexTail = 0;
    let indexHead = 0;

    return  Object.create({
                enqueue(value = false) {
                    if(value == false){return}

                    storage[indexTail] = value;
                    indexTail++;
                },
                dequeue(){
                    if(!storage[indexHead]){return}

                    let lastValue = storage[indexHead];
                    delete storage[indexHead];
                    indexHead++;
                    return lastValue;
                },
                peek(){
                    return storage[indexTail - 1];
                },
                get length(){ 
                    return indexTail - indexHead 
                },
                show(){console.log(storage)},
            })

}

module.exports = Queue;
