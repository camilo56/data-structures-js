const LinkedList = require("./LinkedList.class");
const Node = require("../utils/Node");
var nLinkedList;

beforeEach(() => {
    nLinkedList = new LinkedList("initial");
});

test("get instance", () => {
    expect(nLinkedList).not.toBeUndefined();
})

test("add a item", () => {
    expect(nLinkedList.insert("two")).toEqual({ value: 'two', next: null });
})

test("add node", () => {
    let newNode = Node("camilo");
    expect(nLinkedList.insertNode(newNode)).toEqual(nLinkedList.tail);
})

test("add bad node without value", () => {
    let newNode = {next: null};

    expect(nLinkedList.insertNode(newNode)).toBeNull();
})

test("add bad node without next", () => {
    let newNode = {value: "milo"};

    expect(nLinkedList.insertNode(newNode)).toBeNull();
})

test("add a empty item", () => {
    expect(nLinkedList.insert()).toBeUndefined();
})

test("inset head", () => {
    expect(nLinkedList.insertHead("two")).toEqual({ value: 'two', next: { value: 'initial', next: null } });
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

test("remove an element", () => {
    nLinkedList.insert("one");
    nLinkedList.insert("two");
    nLinkedList.insert("three");
    
    nLinkedList.remove("two");

    expect(nLinkedList.contain("two")).toBeFalsy();
})

test("get the length after removig", () => {
    nLinkedList.insert("two");
    nLinkedList.insert("three");
    
    nLinkedList.remove("two");

    expect(nLinkedList.length).toEqual(2);
})

test("test show", () => {
    expect(nLinkedList.show()).toEqual(JSON.stringify({value: "initial", next: null}));
})

test("get the head", () => {
    expect(nLinkedList.head.value).toBe("initial");
})

test("different instance", () => {
    let iLinkedList = Node("one");
    expect(nLinkedList).not.toBe(iLinkedList);
})
