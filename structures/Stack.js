
function Stack(){
    //private properties
    let _length = 0;
    let _storage = {};

    return  Object.create({
                push(value) {
                    if(!value){return}

                    _storage[_length] = value;
                    _length++;
                    return value;
                },
                pop(){
                    if(!_storage[_length - 1]){return}

                    let value = _storage[_length - 1]; 
                    delete _storage[_length - 1];
                    _length--;
                    return value;
                },
                peek(){
                    if(_storage[_length - 1]){
                        return _storage[_length - 1];
                    }
                },
                clean(){
                    _length = 0;
                    _storage = {};
                    return _storage;
                },
                get length(){ return _length},
                show(){return _storage},
            })
}

module.exports = Stack;
