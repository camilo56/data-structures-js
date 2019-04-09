const Queue = require("./structures/Queue");
const Stack = require("./structures/Stack");
const LinkedList = require("./structures/LinkedList");

const firstStack = Stack();
console.log("------ Stack ------")
firstStack.push("camilo");
firstStack.push("camilo2");
console.log(firstStack.peek())
firstStack.pop();
firstStack.pop();
firstStack.show();
firstStack.push("camilo5");
console.log(firstStack.peek())
firstStack.show();
firstStack.push("camilo6");
console.log(firstStack.length)

const firstQueue = Queue();
console.log("------ Queue ------");
firstQueue.enqueue("camilo1")
firstQueue.enqueue("camilo2")
firstQueue.show();
firstQueue.enqueue()
firstQueue.dequeue()
firstQueue.enqueue("camilo3")
firstQueue.enqueue("camilo4")
firstQueue.enqueue("camilo5")
firstQueue.dequeue()
firstQueue.show();
console.log(firstQueue.peek());
console.log(firstQueue.length)

console.log("------ LinkedList ------");
let fLinkedList = LinkedList("camilo1");
fLinkedList.insert("camilo2")
fLinkedList.insert("camilo3")
fLinkedList.insertHead("camilo-0");
fLinkedList.insert("camilo4")
fLinkedList.show();
fLinkedList.removeHead()
fLinkedList.removeTail()
fLinkedList.show();
console.log(fLinkedList.contain("camilo2"))
console.log(fLinkedList.contain("camilo4"))
fLinkedList.show();
console.log(fLinkedList.length)
fLinkedList.remove("camilo1");
fLinkedList.show();