const HasTable = require("../HasTable");
const fHasTable = HasTable(20);

beforeEach(() => fHasTable.clean());

test("has defined", () => {
    expect(fHasTable).toBeDefined();
})

test("key validation", () => {
    expect(fHasTable.isValidKey(null)).toBe(false);
    expect(fHasTable.isValidKey(false)).toBe(false);
    expect(fHasTable.isValidKey(0)).toBe(false);
    expect(fHasTable.isValidKey(Infinity)).toBe(false);
    expect(fHasTable.isValidKey(undefined)).toBe(false);
    expect(fHasTable.isValidKey()).toBe(false);
    expect(fHasTable.isValidKey([])).toBe(false);
    expect(fHasTable.isValidKey({})).toBe(false);

    expect(fHasTable.isValidKey(2)).toBe(true);
    expect(fHasTable.isValidKey("2")).toBe(true);
    expect(fHasTable.isValidKey("")).toBe(false);
})

test("insert item without key or value", () => {
    const spyIsValidKey = jest.spyOn(fHasTable, 'isValidKey');
    expect(fHasTable.insert(null, "camilo")).toBeUndefined();
    expect(fHasTable.insert("camilo")).toBeUndefined();
    
    expect(spyIsValidKey).toHaveBeenCalledTimes(2);
    spyIsValidKey.mockRestore();
})

test("insert item with falsy or invalid values", () => {
    const spyIsValidKey = jest.spyOn(fHasTable, 'isValidKey');
    expect(fHasTable.insert(undefined, "camilo")).toBeUndefined();
    expect(fHasTable.insert(false, "camilo")).toBeUndefined();
    expect(fHasTable.insert(0)).toBeUndefined();
    
    let variable = 0 / -3;
    expect(fHasTable.insert(variable)).toBeUndefined();

    expect(spyIsValidKey).toHaveBeenCalledTimes(4);
})

test("insert item", () => {
    expect(fHasTable.insert("milo", "camilo")).toBe("camilo");
})

test("get value", () => {
    fHasTable.insert(1, "camilo1");
    fHasTable.insert(10, "camilo2");
    expect(fHasTable.retrive(1)).toBe("camilo1");
    expect(fHasTable.retrive(10)).toBe("camilo2");
})

test("insert overwriting positions", () => {
    fHasTable.insert("asd", "camilo1");
    fHasTable.insert("ads", "camilo2");
    expect(fHasTable.retrive("ads")).toBe("camilo2");
    expect(fHasTable.retrive("asd")).toBe("camilo1");
})

test("remove items", () => {
    fHasTable.insert(1, "camilo1");
    fHasTable.insert(2, "camilo2");
    fHasTable.insert(3, "camilo3");
    expect(fHasTable.remove(2)).toBe("camilo2");
})

test("length after removing items", () => {
    fHasTable.insert(1, "camilo1");
    fHasTable.insert(2, "camilo2");
    fHasTable.insert(3, "camilo3");
    fHasTable.remove(1);

    expect(fHasTable.length).toBe(2);
})
