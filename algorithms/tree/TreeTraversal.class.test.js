const BinarySearchTree = require("../../structures/BinarySearchTree.class");
const TreeTraversal = require("./TreeTraversal.class");
var binarySearchTree;
var treeTraversal = new TreeTraversal();

beforeEach(() => {
  binarySearchTree = new BinarySearchTree();
  treeTraversal = new TreeTraversal();
})

describe("Binary Search Tree", () => {

  test("insert without root", () => {
    fillTree(binarySearchTree, [10,6,15,3,8,20]);

    expect(treeTraversal.BFS(binarySearchTree)).toEqual([10,6,15,3,8,20]);
  })

})

function fillTree(binarySearchTree, items){
  items.forEach(item => {
    binarySearchTree.insert(item);
  })
}