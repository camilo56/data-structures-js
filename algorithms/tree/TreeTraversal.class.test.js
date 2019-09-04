const BinarySearchTree = require("../../structures/BinarySearchTree.class");
const TreeTraversal = require("./TreeTraversal.class");
var binarySearchTree;
var treeTraversal = new TreeTraversal();

beforeEach(() => {
  binarySearchTree = new BinarySearchTree();
  treeTraversal = new TreeTraversal();
})

describe("Binary Search Tree", () => {

  test("Breadth first search", () => {
    fillTree(binarySearchTree, [10,6,15,3,8,20]);

    expect(treeTraversal.BFS(binarySearchTree)).toEqual([10,6,15,3,8,20]);
  })

  test("Deapth first PreOrder", () => {
    fillTree(binarySearchTree, [10,6,15,3,8,20]);

    expect(treeTraversal.DepthFirstPreOrder(binarySearchTree)).toEqual([10,6,3,8,15,20]);
  })

  test("Deapth first PosOrder", () => {
    fillTree(binarySearchTree, [10,6,15,3,8,20]);

    expect(treeTraversal.DepthFirstPosOrder(binarySearchTree)).toEqual([3,8,6,20,15,10]);
  })
  
  test("Deapth first InOrder", () => {
    fillTree(binarySearchTree, [10,6,15,3,8,20]);

    expect(treeTraversal.DepthFirstInOrder(binarySearchTree)).toEqual([3,6,8,10,15,20]);
  })

})

function fillTree(binarySearchTree, items){
  items.forEach(item => {
    binarySearchTree.insert(item);
  })
}