const LinkedList = require("./LinkedList");
const Node = require("../utils/Node");
var nLinkedList = LinkedList();

beforeEach(() => {
    nLinkedList = LinkedList(Node("one"));
});

test("get instance", () => {
    let iLinkedList = LinkedList();
    expect(iLinkedList.show()).toEqual(JSON.stringify({value:"", next: null}));
})

test("add a item", () => {
    let iLinkedList = LinkedList(Node("one"));
    expect(iLinkedList.insert("two")).toEqual({ value: 'two', next: null });
})

test("add node", () => {
    let newNode = Node("camilo");
    let iLinkedList = LinkedList(Node("one"));

    expect(iLinkedList.insertNode(newNode)).toEqual(iLinkedList.tail);
})

test("add bad node without value", () => {
    let newNode = {next: null};
    let iLinkedList = LinkedList(Node("one"));

    expect(iLinkedList.insertNode(newNode)).toBeNull();
})

test("add bad node without next", () => {
    let newNode = {value: "milo"};
    let iLinkedList = LinkedList(Node("one"));

    expect(iLinkedList.insertNode(newNode)).toBeNull();
})

test("add a empty item", () => {
    expect(nLinkedList.insert()).toBeUndefined();
})

test("inset head", () => {
    expect(nLinkedList.insertHead("two")).toEqual({ value: 'two', next: { value: 'one', next: null } });
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

test("get the head", () => {
    expect(nLinkedList.head.value).toBe("one");
})

test("different instance", () => {
    let iLinkedList = Node("one");
    expect(nLinkedList).not.toBe(iLinkedList);
})

test("defined set", () => {
    let secondNode = Node("test set 2");
    nLinkedList.next = Node("test set");
    nLinkedList.next = secondNode;
    expect(nLinkedList.next).toBe(secondNode);
})

