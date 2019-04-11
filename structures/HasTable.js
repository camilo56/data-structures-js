
function HashTable(initialSize){
    //private properties
    let _length = 0;
    let _storage = [];
    let _tableSize = initialSize;

    const _hash = (value, n) => {
        let sum = value;
        if(typeof value === "string"){
            sum = value.split().reduce((accum, char, index) => accum += char.charCodeAt(index) * 3, 0);
        }
        return sum % n;
    }

    const _getItems = (key) =>{
        let index = _hash(key, _tableSize);
        return _storage[index];
    }

    return  Object.create({
                insert(key, value) {
                    if(this.isValidKey(key) == false){return}
                    
                    const index = _hash(key, _tableSize);
                    if(!_storage[index]){_storage[index] = []}

                    
                    for(let i = 0; i < _storage[index].length; i++){
                        let internalItems = _storage[index][i];
                        if(internalItems[0] === key){
                            internalItems[1] = value; 
                            return value;
                        }
                    }
                    
                    _storage[index].push([key, value]);

                    _length++;
                    return value;
                },
                retrive(key){
                    let items = _getItems(key);
                    if(items){
                        for(let i = 0; i < items.length; i++){
                            let internalItems = items[i];
                            if(internalItems[0] === key){ return internalItems[1] }
                        }
                    }
                },
                remove(key){
                    let items = _getItems(key);
                    if(items){
                        for(let i = 0; i < items.length; i++){
                            let internalItems = items[i];
                            if(internalItems[0] === key){
                                items.splice(i,1);
                                _length--;
                                return internalItems[1];
                            }
                        }
                    }
                },
                get length(){ return _length},
                clean(){
                    _length = 0;
                    _storage = [];
                    _tableSize = initialSize;

                },
                isValidKey: value => {
                    const isFiniteNumber = (ivalue) => Number(ivalue) && Number(ivalue) !== 0  && isFinite(ivalue);
                    const isString = (ivalue) => typeof ivalue === "string" && ivalue !== "";

                    return isFiniteNumber(value) || isString(value)
                },
                show(){console.log(_storage)},
            })
}

module.exports = HashTable;
