var findTheMiddleElement = require("./findTheMiddleElement");
const fillList = require("../../utils/FillList");
const LinkedList = require("../../structures/LinkedList.class");

describe('Find the middle node', () => {
    beforeEach(() => {
        findTheMiddleElement.clear();
    });
    
    it('odd number of elements', () => {
        let list = fillList(LinkedList, [1,2,3,4,5,6]);
        
        expect(findTheMiddleElement.find(list).value).toBe(3)
    });
    it('even number of elements', () => {
        let list = fillList(LinkedList, [1,2,3,4,5,6,7]);
        
        expect(findTheMiddleElement.find(list).value).toBe(4)
    });
    
    it('one element', () => {
        let list = fillList(LinkedList, [1]);
        
        expect(findTheMiddleElement.find(list).value).toBe(1);
    });
    
    it('no elements', () => {
        let list = fillList(LinkedList, []);

        expect(findTheMiddleElement.find(list).value).toBe("")
    });
    
    it('find it O(n)', () => {
        const data = Array.from({length: 1001}, (item, i) => i + 1);
        let list = fillList(LinkedList, data);
        
        findTheMiddleElement.find(list);

        expect(findTheMiddleElement.iterations + 1).toBe(Math.round(data.length / 2));
    });

});