class Node{
  constructor(val, priority){
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue{
  constructor(){
    this.values = [];
  }

  enqueue(val, priority){
    let node = new Node(val, priority);
    this.values.push(node);
    if(this.values.length > 1){
      this.bubbleUp();
    }
  }

  bubbleUp(){
    let valueId = this.values.length - 1;
    let value = this.values[valueId];

    let isRightPosition = false;
    
    while(!isRightPosition){
      let parentPosition = Math.floor((valueId - 1) / 2);
      let parent = this.values[parentPosition];
      if(value.priority < parent.priority){
        this.values[valueId] = parent;
        this.values[parentPosition] = value;
        valueId = parentPosition;
      }else{
        isRightPosition = true;
      }
    }
  }

  dequeue(){
    const last = this.values.pop();
    const [maxItem] = this.values;
    if(this.values.length > 0){
      this.values[0] = last;
      this.sinkDown();
    }

    return maxItem;
  }

  sinkDown(){
    let idx = 0;
    const length = this.values.length;
    const elemt = this.values[0];
    while(true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if(leftChildIdx < length){
        leftChild = this.values[leftChildIdx];
        if(leftChild.priority < elemt.priority){
          swap = leftChildIdx;
        }
      }

      if(rightChildIdx.priority < length.priority){
        rightChild = this.values[rightChildIdx];
        if(
          (swap === null && rightChild < elemt) ||
          (swap !== null && rightChild < leftChild)
        ){
          swap = rightChildIdx;
        }
      }

      if(swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = elemt;
      idx = swap;
    }
  }
}

module.exports = PriorityQueue;
