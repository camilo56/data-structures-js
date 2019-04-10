const Stack = require("../Stack");
const nStack = Stack();

afterEach(() => nStack.clean());

test("get instance", () => {
    expect(nStack).toBeTruthy();
})

test("add a item", () => {
    expect(nStack.push("one")).toEqual("one");
})

test("get the length after adding", () => {
    nStack.push("one");
    nStack.push("two");
    nStack.push("three")
    expect(nStack.length).toEqual(3);
})

test("get peek", () => {
    nStack.push("one");
    nStack.push("two");
    nStack.push("three")
    expect(nStack.peek()).toEqual("three");
})

test("remove last one", () => {
    nStack.push("one");
    nStack.push("two");
    expect(nStack.pop()).toEqual("two");
})

test("get the length after removig", () => {
    nStack.push("one");
    nStack.push("two");
    nStack.push("three");
    
    nStack.pop();
    nStack.pop();

    expect(nStack.length).toEqual(1);
})

test("change the length", () => {
    nStack.push("one");
    nStack.length = 10;

    expect(nStack.length).toEqual(1);
})

test("test show", () => {
    nStack.push("one");

    expect(nStack.show()).toEqual({ '0': 'one' });
})

