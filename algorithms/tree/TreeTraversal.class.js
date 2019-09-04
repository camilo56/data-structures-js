class TreeTraversal{
  //Breadth First Search 
  BFS(tree){
    let node = tree.root;
    let data = [];
    let queue = [node];

    while(queue.length){
      node = queue.shift();
      data.push(node.val);
      if(node.left){queue.push(node.left)}
      if(node.right){queue.push(node.right)}
    }
    return data;
  }

  DepthFirstPreOrder(tree){
    let data = [];

    let traverse = node => {
      data.push(node.val);
      if(node.left){traverse(node.left)}
      if(node.right){traverse(node.right)}
    }

    traverse(tree.root);
    
    return data;
  }

  DepthFirstPosOrder(tree){
    let data = [];

    let traverse = node => {
      if(node.left){traverse(node.left)}
      if(node.right){traverse(node.right)}
      data.push(node.val);
    }

    traverse(tree.root);
    
    return data;
  }

  DepthFirstInOrder(tree){
    let data = [];

    let traverse = node => {
      if(node.left){traverse(node.left)}
      data.push(node.val);
      if(node.right){traverse(node.right)}
    }

    traverse(tree.root);
    
    return data;
  }

  show(tree){
    console.log(JSON.stringify(tree))
  }
}

module.exports = TreeTraversal;
