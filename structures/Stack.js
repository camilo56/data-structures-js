
function stack(){
    return  Object.create({
                index: 0,
                storage: {},
                push: function(data) {
                    if(!data){return}

                    this.storage[this.index] = data;
                    this.index++;
                },
                pop: function(){
                    if(!this.storage[this.index - 1]){return}

                    delete this.storage[this.index - 1];
                    this.index--;
                },
                show: function(){console.log(this.storage)},
            })

}

module.exports = stack;
