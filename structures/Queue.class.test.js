const Queue = require("./Queue.class");
let queue = new Queue();

afterEach(() => queue = new Queue());

test("get instance", () => {
	expect(queue).toBeTruthy();
})

test("add a item", () => {
	expect(queue.enqueue("one")).toEqual(1);
})

test("add a empty item", () => {
	expect(queue.enqueue()).toBeUndefined();
})

test("get the length after adding", () => {
	queue.enqueue("one");
	queue.enqueue("two");
	queue.enqueue("three")
	expect(queue.size).toEqual(3);
})

test("get enqueue", () => {
	queue.enqueue("one");
	queue.enqueue("two");
	queue.enqueue("three")
	expect(queue.peek()).toEqual("three");
})

test("remove last one", () => {
	queue.enqueue("one");
	queue.enqueue("two");
	queue.enqueue("three")
	queue.enqueue("four")

	expect(queue.dequeue()).toEqual("one");
})

test("get the length after removig", () => {
	queue.enqueue("one");
	queue.enqueue("two");
	queue.enqueue("three");
	
	queue.dequeue();
	queue.dequeue();

	expect(queue.size).toEqual(1);
})

