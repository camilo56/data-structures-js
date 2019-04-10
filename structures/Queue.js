
function Queue(){
    //private properties
    let _storage =  {};
    let _indexTail = 0;
    let _indexHead = 0;

    return  Object.create({
                enqueue(value = false) {
                    if(value == false){return}

                    _storage[_indexTail] = value;
                    _indexTail++;
                },
                dequeue(){
                    if(!_storage[_indexHead]){return}

                    let lastValue = _storage[_indexHead];
                    delete _storage[_indexHead];
                    _indexHead++;
                    return lastValue;
                },
                peek(){
                    return _storage[_indexTail - 1];
                },
                get length(){ 
                    return _indexTail - _indexHead 
                },
                show(){console.log(_storage)},
            })

}

module.exports = Queue;
