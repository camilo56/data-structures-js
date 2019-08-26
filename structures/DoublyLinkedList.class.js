class Node{
  constructor(val, next = null, prev = null){
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  
  push(val){
    const newNode = new Node(val, null, this.tail);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }else{
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop(){
    if(!this.head){
      return false
    }

    let current = this.tail;
    
    if(this.length === 1){
      this.head = null;
      this.tail = null;;
    }else{
      this.tail = current.prev;
      this.tail.next = null;
    }
    this.length--;
    
    return current;
  }

  shift(){
    if(!this.head){return}
    let current = this.head;

    if(this.length === 1){
      this.head = null;
      this.tail = null;
    }else{
      this.head = current.next;
      this.head.prev = null;
      current.next = null;
    }
    this.length--;    
  
    return current;
  }

  unshift(val){
    let newHead = new Node(val, this.head);
    if(!this.head){
      this.head = newHead;
      this.tail = this.head;
    }else{
      this.head = newHead;
    }
    this.length++;
  
    return newHead;
  }

  get(index){
    if(index < 0 || index > this.length - 1){ return null}
    let current;
    let auxIndex;
    
    if(index <= Math.ceil(this.length / 2)) {
      current = this.head;
      auxIndex = 0;
      while(auxIndex !== index){
        current = current.next;
        auxIndex++;
      }
    }else{
      auxIndex = this.length -1;
      current = this.tail;
      while(auxIndex !== index){
        current = current.prev;
        auxIndex--;
      }
    }

    return current;
  }

  set(index, val){
    let node = this.get(index);
    if(node){
      node.val = val;
      return true;
    }
    return false;
  }

  insert(index, val){
    if(index < 0 || index > this.length){
      return false;
    }

    if(index === 0){
      this.unshift(val);
      return true;
    }

    if(index === this.length){
      this.push(val);
      return true;
    }

    let prevNode = this.get(index - 1);
    let newNode = new Node(val, prevNode.next, prevNode);
    prevNode.next = newNode;
    this.length++;
    return true;
  }

  remove(index){
    if(index < 0 || index > this.length){
      return false;
    }

    if(index === this.length){
      this.pop();
      return true;
    }

    let prevNode = this.get(index - 1);
    prevNode.next.next.prev = prevNode;
    prevNode.next = prevNode.next.next;
    this.length--;
    return true;
  }

  reverse(){
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next;
    let prev = null;
    for(let i = 0; i < this.length; i++){
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  showList(){
    console.log(JSON.stringify(this));
  }

}

module.exports = DoublyLinkedList;
