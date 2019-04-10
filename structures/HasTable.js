
function HashTable(size){
    //private properties
    let _length = 0;
    let _storage = [];
    let _tableSize = size;

    const _hash = (str, n) => {
        let sum = str.split()
                    .reduce((accum, char, index) =>{
                        accum += str.charCodeAt(index) * 3;
                        return accum;
                    }, 0);
        return sum % n;
    }

    return  Object.create({
                insert(key, value) {
                    if(!key){return}

                    const index = _hash(key, _tableSize);
                    if(!_storage[index]){_storage[index] = []}

                    
                    for(let i = 0; i < _storage[index].length; i++){
                        let internalItems = _storage[index][i];
                        if(internalItems[0] === key){ return internalItems[1] = value }
                    }
                    
                    _storage[index].push([key, value]);

                    _length++;
                },
                retrive(key){
                    let items = this.getItems(key);
                    if(items){
                        for(let i = 0; i < items.length; i++){
                            let internalItems = items[i];
                            if(internalItems[0] === key){ return internalItems[1] }
                        }
                    }
                },
                remove(key){
                    let items = this.getItems(key);
                    if(items){
                        for(let i = 0; i < items.length; i++){
                            let internalItems = items[i];
                            if(internalItems[0] === key){
                                return items.splice(i,1);  
                            }
                        }
                    }

                    _length--;
                },
                getItems(key){
                    let index = _hash(key, _tableSize);
                    return _storage[index];
                },
                get length(){ return _length},
                show(){console.log(_storage)},
            })
}

module.exports = HashTable;
