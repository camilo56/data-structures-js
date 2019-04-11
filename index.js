const Queue = require("./structures/Queue");
const Stack = require("./structures/Stack");
const LinkedList = require("./structures/LinkedList");
const HasTable = require("./structures/HasTable");

/* const firstStack = Stack();
console.log("------ Stack ------")
firstStack.push("camilo");
firstStack.push("camilo2");
console.log(firstStack.peek())
firstStack.pop();
firstStack.pop();
console.log(firstStack.show());
firstStack.push("camilo5");
console.log(firstStack.peek())
console.log(firstStack.show());
firstStack.push("camilo6");
console.log(firstStack.length = 10)
console.log(firstStack.length) */

/* const firstQueue = Queue();
console.log("------ Queue ------");
firstQueue.enqueue("camilo1")
firstQueue.enqueue("camilo2")
console.log(firstQueue.show());
firstQueue.enqueue()
firstQueue.dequeue()
firstQueue.enqueue("camilo3")
firstQueue.enqueue("camilo4")
firstQueue.enqueue("camilo5")
firstQueue.dequeue()
console.log(firstQueue.show());
console.log(firstQueue.peek());
console.log(firstQueue.length) */


/* console.log("------ LinkedList ------");
let fLinkedList = LinkedList("camilo1");
fLinkedList.insert("camilo2")
fLinkedList.insert("camilo3")
fLinkedList.insertHead("camilo-0");
fLinkedList.insert("camilo4")
console.log(fLinkedList.show());
fLinkedList.removeHead()
fLinkedList.removeTail()
console.log(fLinkedList.show());
console.log(fLinkedList.contain("camilo2"))
console.log(fLinkedList.contain("camilo4"))
console.log(fLinkedList.show());
console.log(fLinkedList.length)
fLinkedList.remove("camilo1");
console.log(fLinkedList.show()); */

console.log("------ HasTable ------");
let fHasTable = HasTable(20);

console.log(fHasTable.insert("asd", "Camilo1"));
console.log(fHasTable.insert("ads", "Camilo2"));
/* console.log(fHasTable.insert("three", "Camilo3"));
console.log(fHasTable.insert("two", "change Camilo2"));
console.log(fHasTable.retrive("two"));
*/
console.log(fHasTable.retrive("two"));
fHasTable.show();
/* console.log(fHasTable.retrive("two"));
console.log(fHasTable.retrive("three"));
console.log(fHasTable.retrive("one")); */
