const BinarySearchTree = require("./BinarySearchTree.class");
var binarySearchTree;

beforeEach(() => {
  binarySearchTree = new BinarySearchTree();
})

describe("Binary Search Tree", () => {

  test("insert without root", () => {
    binarySearchTree.insert(10);
    expect(binarySearchTree.root.val).toBe(10);
  })
  
  test("insert node left", () => {
    binarySearchTree.insert(10);
    binarySearchTree.insert(8);
    expect(binarySearchTree.root.left.val).toBe(8);
  })
  
  test("insert node left 2 levels", () => {
    binarySearchTree.insert(10);
    binarySearchTree.insert(8);
    binarySearchTree.insert(5);
    expect(binarySearchTree.root.left.left.val).toBe(5);
  })
  
  test("insert node right", () => {
    binarySearchTree.insert(10);
    binarySearchTree.insert(12);
    expect(binarySearchTree.root.right.val).toBe(12);

  })
  
  test("insert node right 2 levels", () => {
    binarySearchTree.insert(10);
    binarySearchTree.insert(12);
    binarySearchTree.insert(22);
    expect(binarySearchTree.root.right.right.val).toBe(22);
  })
  
  test("insert already saved node value", () => {
    binarySearchTree.insert(10);
    binarySearchTree.insert(10);    
    expect(binarySearchTree.root.val).toBe(10);
  })
  
  test("serching in an empty tree", () => {
    expect(binarySearchTree.search(8)).toBe(false);
  })
  
  test("serching value", () => {
    fillTree(binarySearchTree, [10, 12, 8 ,15]);
    expect(binarySearchTree.search(8)).toBe(true);
  })

  test("serching nonexistent value", () => {
    fillTree(binarySearchTree, [10, 12, 8 ,15]);
    expect(binarySearchTree.search(22)).toBe(false);
  })
})

function fillTree(binarySearchTree, items){
  items.forEach(item => {
    binarySearchTree.insert(item);
  })
}