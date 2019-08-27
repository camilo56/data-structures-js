
class Node{
  constructor(val, left = null, right = null){
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class TreeTraversal{

  //Breadth First Search 
  BFS(tree){
    let node = tree.root;
    let data = [];
    let queue = [];

    queue.push(node);

    while(queue.length){
      node = queue.shift();
      data.push(node.val);
      if(node.left){queue.push(node.left)}
      if(node.right){queue.push(node.right)}
    }
    return data;
  }

  show(tree){
    console.log(JSON.stringify(tree))
  }
}

module.exports = TreeTraversal;
