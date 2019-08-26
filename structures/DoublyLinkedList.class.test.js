const DoublyLinkedList = require("./DoublyLinkedList.class.js");
var doublyLinkedList;

beforeEach(() => {
    doublyLinkedList = new DoublyLinkedList();
})

fdescribe("Singly Liked List", () => {

  test("get instance", () => {
    expect(doublyLinkedList).toBeTruthy();
    expect(doublyLinkedList.length).toBe(0);
  })

  test("insert first element", () => {
    let newVal = "milo";
    doublyLinkedList.push(newVal);
    expect(doublyLinkedList.length).toBe(1);
    expect(doublyLinkedList.head.val).toBe("milo");
  })

  test("insert many elements", () => {
    fillList(doublyLinkedList, ["camilo", "colorado"]);

    expect(doublyLinkedList.length).toBe(2);
    expect(doublyLinkedList.tail.val).toBe("colorado");
    expect(doublyLinkedList.tail.prev.val).toBe("camilo");
  })

  test("insert element check tail", () => {
    fillList(doublyLinkedList, ["camilo", "colorado"]);

    doublyLinkedList.push("cristian")
    expect(doublyLinkedList.length).toBe(3);
    expect(doublyLinkedList.tail.val).toBe("cristian");
    expect(doublyLinkedList.tail.prev.val).toBe("colorado");
  })
  test("pop list with one element", () => {
    fillList(doublyLinkedList, ["camilo"]);
    
    doublyLinkedList.pop();
    expect(doublyLinkedList.tail).toBe(null);
    expect(doublyLinkedList.length).toBe(0);
  })
  
  test("pop list with multiple lements", () => {
    fillList(doublyLinkedList, ["camilo", "colorado"]);
    
    expect(doublyLinkedList.pop().val).toBe("colorado");
    expect(doublyLinkedList.length).toBe(1);
  })
  
  
  test("shift list", () => {
    fillList(doublyLinkedList, ["camilo", "colorado"]);
    
    expect(doublyLinkedList.shift().val).toBe("camilo");
    expect(doublyLinkedList.tail.prev).toBe(null);
  })

  test("shift list to cleam it up", () => {
    fillList(doublyLinkedList, ["camilo", "colorado"]);
    doublyLinkedList.shift()

    expect(doublyLinkedList.shift().val).toBe("colorado");
    expect(doublyLinkedList.head).toBeFalsy();
  })
  test("unshift", () => {
    fillList(doublyLinkedList, ["camilo", "colorado"]);
    doublyLinkedList.unshift("cristian")
    
    expect(doublyLinkedList.head.val).toBe("cristian");
    expect(doublyLinkedList.length).toBe(3);
  })
  
  test("unshift empty list", () => {
    doublyLinkedList.unshift("cristian")
    
    expect(doublyLinkedList.head.val).toBe("cristian");
    expect(doublyLinkedList.length).toBe(1);
  })
  
  test("get invalid index", () => {
    fillList(doublyLinkedList, ["camilo", "colorado", "colmenares", "cristian"]);
    expect(doublyLinkedList.get(-1)).toBe(null);
    expect(doublyLinkedList.get(4)).toBe(null);
    expect(doublyLinkedList.get(10)).toBe(null);
  })
  
  test("get item on index 2", () => {
    fillList(doublyLinkedList, ["camilo", "colorado", "colmenares", "cristian"]);
    expect(doublyLinkedList.get(2).val).toBe("colmenares");
  })

  test("get item on index 4", () => {
    fillList(doublyLinkedList, ["camilo", "colorado", "colmenares", "cristian", "milo"]);
    expect(doublyLinkedList.get(4).val).toBe("milo");
  })
  
  test("set value on index 2", () => {
    fillList(doublyLinkedList, ["camilo", "colorado", "colmenares", "cristian"]);

    expect(doublyLinkedList.set(2, "milo")).toBe(true);
    expect(doublyLinkedList.get(2).val).toBe("milo");
    expect(doublyLinkedList.get(2).prev.val).toBe("colorado");
  })
  
  test("set value on invalid index", () => {
    fillList(doublyLinkedList, ["camilo", "colorado", "colmenares", "cristian"]);
    expect(doublyLinkedList.set(7, "milo")).toBe(false);
  })
  
  test("insert invalid index", () => {
    fillList(doublyLinkedList, ["camilo", "colorado", "colmenares", "cristian"]);
    expect(doublyLinkedList.insert(-1, "milo")).toBe(false);
    expect(doublyLinkedList.insert(10, "milo")).toBe(false);
  })
  
  test("insert at the beginning", () => {    
    fillList(doublyLinkedList, ["camilo"]);
    doublyLinkedList.insert(0, "milo");
    
    expect(doublyLinkedList.head.val).toBe("milo");
  })
  
  test("insert element index 2", () => {
    fillList(doublyLinkedList, ["camilo", "colorado", "colmenares", "cristian"]);
    doublyLinkedList.insert(2, "milo")
    
    expect(doublyLinkedList.get(2).val).toBe("milo");
    expect(doublyLinkedList.get(2).prev.val).toBe("colorado");
    expect(doublyLinkedList.get(3).val).toBe("colmenares");
    expect(doublyLinkedList.length).toBe(5);
  })
  
  test("insert element for replacing the tail", () => {
    fillList(doublyLinkedList, ["camilo", "colorado", "colmenares", "cristian"]);
    doublyLinkedList.insert(4, "milo")
    
    expect(doublyLinkedList.tail.val).toBe("milo");
    expect(doublyLinkedList.length).toBe(5);
  })
  
  
  test("remove invalid index", () => {
    fillList(doublyLinkedList, ["camilo", "colorado", "colmenares", "cristian"]);
    expect(doublyLinkedList.insert(-1)).toBe(false);
    expect(doublyLinkedList.insert(5)).toBe(false);
  })

  test("remove item index", () => {
    fillList(doublyLinkedList, ["camilo", "colorado", "colmenares", "cristian"]);
    expect(doublyLinkedList.remove(1)).toBe(true);
    expect(doublyLinkedList.get(1).val).toBe("colmenares");
  })

  test("remove item index length updated", () => {
    fillList(doublyLinkedList, ["camilo", "colorado", "colmenares", "cristian"]);
    doublyLinkedList.remove(1);

    expect(doublyLinkedList.length).toBe(3);
  })

  test("remove last item", () => {
    fillList(doublyLinkedList, ["camilo", "colorado", "colmenares", "cristian"]);
    doublyLinkedList.remove(4);

    expect(doublyLinkedList.tail.val).toBe("colmenares");
  })

  test("remove middle item", () => {
    fillList(doublyLinkedList, ["camilo", "colorado", "colmenares", "cristian", "milo"]);
    doublyLinkedList.remove(2);

    expect(doublyLinkedList.get(2).val).toBe("cristian");
    expect(doublyLinkedList.get(2).prev.val).toBe("colorado");
  })

  test("reverse list tails is head and viceversa", () => {
    fillList(doublyLinkedList, ["colorado", "colmenares", "cristian", "camilo"]);
    doublyLinkedList.reverse();

    expect(doublyLinkedList.head.val).toBe("camilo");
    expect(doublyLinkedList.head.prev.val).toBe("cristian");
    expect(doublyLinkedList.tail.val).toBe("colorado");
  })

  test("reverse list get index", () => {
    fillList(doublyLinkedList, ["camilo", "colorado", "colmenares", "cristian", "milo"]);
    doublyLinkedList.reverse();

    expect(doublyLinkedList.get(1).val).toBe("cristian");
  })

})

function fillList(doublyLinkedList, items){
  items.forEach(item => {
    doublyLinkedList.push(item);
  })
}