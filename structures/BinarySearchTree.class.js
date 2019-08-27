
class Node{
  constructor(val, left = null, right = null){
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree{
  constructor(){
    this.root = null;
  }

  insert(val){
    let newNode = new Node(val);
    if(this.root == null){
      this.root = newNode;
      return this;
    }else {

      let current = this.root;
      while(true){
        if(val === current.val){return this}
        if(val < current.val){
          if(current.left === null){
            current.left = newNode;
            return this;
          }
          current = current.left;
        }
        if(val > current.val){
          if(current.right === null){
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }

    }
  }

  search(val) {
    if(this.root === null){return false};
    let current = this.root;

    while(current) {
      if(val < current.val) {
        current = current.left;
      }else if(val > current.val) {
        current = current.right;
      }else {
        return true;
      }
    }
    return false;
  }

  show(){
    console.log(JSON.stringify(this))
  }
}

module.exports = BinarySearchTree;
