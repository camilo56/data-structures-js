const Queue = require("./structures/Queue");
const Stack = require("./structures/Stack");

const firstStack = Stack();
console.log("------ Stack ------")
firstStack.push("camilo");
firstStack.push("camilo2");
firstStack.push("camilo3");
firstStack.push("camilo4");
firstStack.pop();
firstStack.pop();
firstStack.show();

const firstQueue = Queue();
console.log("------ Queue ------");
firstQueue.enqueue("camilo1")
firstQueue.enqueue("camilo2")
firstQueue.show();
firstQueue.enqueue()
firstQueue.dequeue()
firstQueue.show();

