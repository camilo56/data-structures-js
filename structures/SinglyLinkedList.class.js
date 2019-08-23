class Node{
  constructor(val, next = null){
    this.val = val;
    this.next = next;
  }
}

class SinglyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  
  push(val){
    const newNode = new Node(val);
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
    let current = this.head;
    let newTail = current;
    
    while(current.next){
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if(this.length === 0){
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift(){
    if(!this.head){return}
    let current = this.head;
    this.head = current.next;
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
    if(index < 0 || index > this.length){ return null}
    let auxIndex = 0;
    let current = this.head;
    while(auxIndex !== index){
      current = current.next;
      auxIndex++;
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
    let newNode = new Node(val, prevNode.next);
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

module.exports = SinglyLinkedList;