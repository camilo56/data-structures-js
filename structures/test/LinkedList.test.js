const LinkedList = require("../LinkedList");
const nLinkedList = LinkedList("one");

beforeEach(() => nLinkedList.clean());

test("get instance", () => {
    expect(nLinkedList).toBeTruthy();
})

test("add a item", () => {
    nLinkedList.insert("two");
    expect(nLinkedList.insert("two")).toEqual({ value: 'two', next: null });
})

test("add a empty item", () => {
    expect(nLinkedList.insert()).toBeUndefined();
})

test("inset head", () => {
    nLinkedList.insert("tree");
    expect(nLinkedList.insertHead("two")).toEqual({ value: 'two', next: { value: 'one', next: { value: 'tree', next: null } } });
})

test("get the length after adding", () => {
    nLinkedList.insert("two");
    nLinkedList.insert("three")

    expect(nLinkedList.length).toEqual(3);
})

test("get contain", () => {
    nLinkedList.insert("two");
    nLinkedList.insert("three")
    expect(nLinkedList.contain("two")).toBe(true);
})

test("remove last one", () => {
    nLinkedList.insert("two");
    nLinkedList.insert("three")
    nLinkedList.insert("four")

    expect(nLinkedList.removeTail()).toEqual({value: "four", next: null});
})

test("get the length after removig", () => {
    nLinkedList.insert("two");
    nLinkedList.insert("three");
    
    nLinkedList.removeTail();
    nLinkedList.removeTail();

    expect(nLinkedList.length).toEqual(1);
})

test("change the length", () => {
    nLinkedList.length = 10;
    expect(nLinkedList.length).toEqual(1);
})

test("test show", () => {
    expect(nLinkedList.show()).toEqual(JSON.stringify({value: "one", next: null}));
})

