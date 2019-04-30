const Node = require("./Node");

module.exports = (LinkedList, [first, ...items] = [undefined, []]) => {
    let list = new LinkedList(first);
    items.forEach(element => list.insert(element));
    return list;
};