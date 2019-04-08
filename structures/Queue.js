
function queue(){
    return  Object.create({
                tail: 1,
                head: 1,
                storage: {},
                enqueue: function(data = false) {
                    if(data == false){return}

                    this.storage[this.tail] = data;
                    this.tail++;
                },
                dequeue: function(){
                    if(!this.storage[this.head]){return}

                    delete this.storage[this.head];
                    this.head++;
                },
                show: function(){console.log(this.storage)},
            })

}

module.exports = queue;
