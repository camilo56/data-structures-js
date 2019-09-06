const MaxBinaryHeap = require("./MaxBinaryHeap.class");
var maxBinaryHeap;

beforeEach(() => {
  maxBinaryHeap = new MaxBinaryHeap();
})

describe("Binary Search Tree", () => {

  test("insert first value", () => {
    maxBinaryHeap.insert(10);
    
    expect(maxBinaryHeap.values[0]).toBe(10);
  })

  test("insert an element bigger that the head", () => {
    maxBinaryHeap.insert(10);
    maxBinaryHeap.insert(8);
    maxBinaryHeap.insert(6);
    maxBinaryHeap.insert(12);
    
    expect(maxBinaryHeap.values[0]).toBe(12);
  })

  test("insert an element", () => {
    maxBinaryHeap.insert(10);
    maxBinaryHeap.insert(8);

    expect(maxBinaryHeap.values).toEqual([10,8]);
  })

  test("extract the biggest item", () => {
    fillTree(maxBinaryHeap, [10,2,4,5,7]);

    expect(maxBinaryHeap.extractMax()).toEqual(10);
  })

  test("extract the biggest item", () => {
    fillTree(maxBinaryHeap, [10,2,4,5,7,1]);
    maxBinaryHeap.extractMax();

    expect(maxBinaryHeap.values[0]).toEqual(7);
  })

  test("extract the biggest item short array", () => {
    fillTree(maxBinaryHeap, [10]);
    maxBinaryHeap.extractMax();

    expect(maxBinaryHeap.values.length).toEqual(0);
  })
  
})

function fillTree(maxBinaryHeap, items){
  items.forEach(item => {
    maxBinaryHeap.insert(item);
  })
}
