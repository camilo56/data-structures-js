
function Stack(){
    //private properties
    let length = 0;
    let storage = {};

    return  Object.create({
                push(value) {
                    if(!value){return}

                    storage[length] = value;
                    length++;
                },
                pop(){
                    if(!storage[length - 1]){return}

                    let value = storage[length - 1]; 
                    delete storage[length - 1];
                    length--;
                    return value;
                },
                peek(){
                    if(storage[length - 1]){
                        return storage[length - 1];
                    }
                },
                get length(){ return length},
                show(){console.log(storage)},
            })
}

module.exports = Stack;
