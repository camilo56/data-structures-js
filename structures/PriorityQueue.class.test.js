const PriorityQueue = require("./PriorityQueue.class");
var priorityQueue;

beforeEach(() => {
  priorityQueue = new PriorityQueue();
})

describe("Binary Search Tree", () => {

  test("insert first value", () => {
    priorityQueue.enqueue(10, 1);
    
    expect(priorityQueue.values[0].val).toBe(10);
  })

  test("insert an element bigger that the head", () => {
    priorityQueue.enqueue("test 1", 1);
    priorityQueue.enqueue("test 2", 2);
    priorityQueue.enqueue("test 3", 3);
    priorityQueue.enqueue("test 4", 4);
    
    expect(priorityQueue.values[0].val).toBe("test 1");
  })
  test("insert an element", () => {
    priorityQueue.enqueue("test 1", 1);
    priorityQueue.enqueue("test 2", 2);
    
    expect(priorityQueue.values.length).toEqual(2);
  })
  
  test("extract the biggest item", () => {
    fillQueue(priorityQueue, [{val: "test 1", priority: 1}, {val: "test 2", priority: 2}, {val: "test 3", priority: 3}]);
    
    expect(priorityQueue.dequeue()).toEqual({val: "test 1", priority: 1});
  })
  
  test("extract the biggest item", () => {
    fillQueue(priorityQueue, [{val: "test 1", priority: 1}, {val: "test 2", priority: 2}, {val: "test 3", priority: 3}]);
    priorityQueue.dequeue();
    
    expect(priorityQueue.values[0].val).toEqual("test 2");
  })
  

  test("extract the biggest item short array", () => {
    fillQueue(priorityQueue, [{val: "test 1", priority: 1}]);
    priorityQueue.dequeue();

    expect(priorityQueue.values.length).toEqual(0);
  })
  
})

function fillQueue(priorityQueue, items){
  items.forEach(item => {
    priorityQueue.enqueue(item.val, item.priority);
  })
}
