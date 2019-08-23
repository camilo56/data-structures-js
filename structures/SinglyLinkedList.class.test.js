const SinglyLinkedList = require("./SinglyLinkedList.class.js");
var singlyLinkedList;

beforeEach(() => {
    singlyLinkedList = new SinglyLinkedList();
})

fdescribe("Singly Liked List", () => {

  test("get instance", () => {
    expect(singlyLinkedList).toBeTruthy();
    expect(singlyLinkedList.length).toBe(0);
  })

  test("insert first element", () => {
    let newVal = "milo";
    singlyLinkedList.push(newVal);
    expect(singlyLinkedList.length).toBe(1);
    expect(singlyLinkedList.head.val).toBe("milo");
  })

  test("insert many elements", () => {
    fillList(singlyLinkedList, ["camilo", "colorado"]);

    expect(singlyLinkedList.length).toBe(2);
    expect(singlyLinkedList.tail.val).toBe("colorado");
  })

  test("pop list with one element", () => {
    fillList(singlyLinkedList, ["camilo"]);

    singlyLinkedList.pop();
    expect(singlyLinkedList.tail).toBe(null);
    expect(singlyLinkedList.length).toBe(0);
  })

  test("pop list with multiple lements", () => {
    fillList(singlyLinkedList, ["camilo", "colorado"]);

    expect(singlyLinkedList.pop().val).toBe("colorado");
    expect(singlyLinkedList.length).toBe(1);
  })

  test("shift list", () => {
    fillList(singlyLinkedList, ["camilo", "colorado"]);

    expect(singlyLinkedList.shift().val).toBe("camilo");
  })

  test("shift list to cleam it up", () => {
    fillList(singlyLinkedList, ["camilo", "colorado"]);
    singlyLinkedList.shift()

    expect(singlyLinkedList.shift().val).toBe("colorado");
    expect(singlyLinkedList.head).toBeFalsy();
  })

  test("unshift", () => {
    fillList(singlyLinkedList, ["camilo", "colorado"]);
    singlyLinkedList.unshift("cristian")

    expect(singlyLinkedList.head.val).toBe("cristian");
    expect(singlyLinkedList.length).toBe(3);
  })

  test("unshift empty list", () => {
    singlyLinkedList.unshift("cristian")

    expect(singlyLinkedList.head.val).toBe("cristian");
    expect(singlyLinkedList.length).toBe(1);
  })

  test("get invalid index", () => {
    fillList(singlyLinkedList, ["camilo", "colorado", "colmenares", "cristian"]);
    expect(singlyLinkedList.get(-1)).toBe(null);
    expect(singlyLinkedList.get(10)).toBe(null);
  })

  test("get item on index 2", () => {
    fillList(singlyLinkedList, ["camilo", "colorado", "colmenares", "cristian"]);
    expect(singlyLinkedList.get(2).val).toBe("colmenares");
  })


  test("set value on index 2", () => {
    fillList(singlyLinkedList, ["camilo", "colorado", "colmenares", "cristian"]);
    expect(singlyLinkedList.set(2, "milo")).toBe(true);
    expect(singlyLinkedList.get(2).val).toBe("milo");
  })

  test("set value on invalid index", () => {
    fillList(singlyLinkedList, ["camilo", "colorado", "colmenares", "cristian"]);
    expect(singlyLinkedList.set(7, "milo")).toBe(false);
  })

  test("insert invalid index", () => {
    fillList(singlyLinkedList, ["camilo", "colorado", "colmenares", "cristian"]);
    expect(singlyLinkedList.insert(-1, "milo")).toBe(false);
    expect(singlyLinkedList.insert(10, "milo")).toBe(false);
  })

  test("insert at the beginning", () => {    
    fillList(singlyLinkedList, ["camilo"]);
    singlyLinkedList.insert(0, "milo");

    expect(singlyLinkedList.head.val).toBe("milo");
  })

  test("insert element index 2", () => {
    fillList(singlyLinkedList, ["camilo", "colorado", "colmenares", "cristian"]);
    singlyLinkedList.insert(2, "milo")

    expect(singlyLinkedList.get(2).val).toBe("milo");
    expect(singlyLinkedList.get(3).val).toBe("colmenares");
    expect(singlyLinkedList.length).toBe(5);
  })
  
  test("insert element for replacing the tail", () => {
    fillList(singlyLinkedList, ["camilo", "colorado", "colmenares", "cristian"]);
    singlyLinkedList.insert(4, "milo")
    
    expect(singlyLinkedList.tail.val).toBe("milo");
    expect(singlyLinkedList.length).toBe(5);
  })

  test("remove invalid index", () => {
    fillList(singlyLinkedList, ["camilo", "colorado", "colmenares", "cristian"]);
    expect(singlyLinkedList.insert(-1)).toBe(false);
    expect(singlyLinkedList.insert(5)).toBe(false);
  })

  test("remove item index", () => {
    fillList(singlyLinkedList, ["camilo", "colorado", "colmenares", "cristian"]);
    expect(singlyLinkedList.remove(1)).toBe(true);
    expect(singlyLinkedList.get(1).val).toBe("colmenares");
  })

  test("remove item index length updated", () => {
    fillList(singlyLinkedList, ["camilo", "colorado", "colmenares", "cristian"]);
    singlyLinkedList.remove(1);

    expect(singlyLinkedList.length).toBe(3);
  })

  test("remove last item", () => {
    fillList(singlyLinkedList, ["camilo", "colorado", "colmenares", "cristian"]);
    singlyLinkedList.remove(4);

    expect(singlyLinkedList.tail.val).toBe("colmenares");
  })

  test("reverse list tails is head and viceversa", () => {
    fillList(singlyLinkedList, ["camilo", "colorado", "colmenares", "cristian"]);
    singlyLinkedList.reverse();

    expect(singlyLinkedList.head.val).toBe("cristian");
    expect(singlyLinkedList.tail.val).toBe("camilo");
  })

  test("reverse list get index", () => {
    fillList(singlyLinkedList, ["camilo", "colorado", "colmenares", "cristian", "milo"]);
    singlyLinkedList.reverse();

    expect(singlyLinkedList.get(1).val).toBe("cristian");
  })

})

function fillList(singlyLinkedList, items){
  items.forEach(item => {
    singlyLinkedList.push(item);
  })
}