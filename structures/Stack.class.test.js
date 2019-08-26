const Stack = require("./Stack.class");
let stack = new Stack();

afterEach(() => stack = new Stack());

test("get instance", () => {
  expect(stack).toBeTruthy();
})

test("add a item", () => {
  expect(stack.push("one")).toEqual(1);
})

test("add a empty item", () => {
  expect(stack.push()).toBeUndefined();
})

test("get the length after adding", () => {
  stack.push("one");
  stack.push("two");
  stack.push("three")
  expect(stack.size).toEqual(3);
})

test("get peek", () => {
  stack.push("one");
  stack.push("two");
  stack.push("three")
  expect(stack.peek()).toEqual("three");
})

test("remove last one", () => {
  stack.push("one");
  stack.push("two");
  expect(stack.pop()).toEqual("two");
})

test("get the length after removig", () => {
  stack.push("one");
  stack.push("two");
  stack.push("three");
  stack.pop();
  stack.pop();
  expect(stack.size).toEqual(1);
})
