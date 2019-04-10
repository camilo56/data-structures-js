const Queue = require("../Queue");
const nQueue = Queue();

afterEach(() => nQueue.clean());

test("get instance", () => {
    expect(nQueue).toBeTruthy();
})

test("add a item", () => {
    expect(nQueue.enqueue("one")).toEqual("one");
})

test("add a empty item", () => {
    expect(nQueue.enqueue()).toBeUndefined();
})

test("get the length after adding", () => {
    nQueue.enqueue("one");
    nQueue.enqueue("two");
    nQueue.enqueue("three")
    expect(nQueue.length).toEqual(3);
})

test("get enqueue", () => {
    nQueue.enqueue("one");
    nQueue.enqueue("two");
    nQueue.enqueue("three")
    expect(nQueue.peek()).toEqual("three");
})

test("remove last one", () => {
    nQueue.enqueue("one");
    nQueue.enqueue("two");
    nQueue.enqueue("three")
    nQueue.enqueue("four")

    expect(nQueue.dequeue()).toEqual("one");
})

test("get the length after removig", () => {
    nQueue.enqueue("one");
    nQueue.enqueue("two");
    nQueue.enqueue("three");
    
    nQueue.dequeue();
    nQueue.dequeue();

    expect(nQueue.length).toEqual(1);
})

test("change the length", () => {
    nQueue.enqueue("one");
    nQueue.length = 10;

    expect(nQueue.length).toEqual(1);
})

test("test show", () => {
    nQueue.enqueue("one");

    expect(nQueue.show()).toEqual({ '0': 'one' });
})

