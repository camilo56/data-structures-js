var findTheMiddleElement = require("../linkedList/findTheMiddleElement");

describe('Find the middle node', () => {
    beforeEach(() => {
        findTheMiddleElement.clear();
    });
    
    it('odd number of elements', () => {
        findTheMiddleElement.fill([1,2,3,4,5,6]);

        expect(findTheMiddleElement.findMiddle().value).toBe(3)
    });
    it('even number of elements', () => {
        findTheMiddleElement.fill([1,2,3,4,5,6,7]);
    
        expect(findTheMiddleElement.findMiddle().value).toBe(4)
    });
    
    it('one element', () => {
        findTheMiddleElement.fill([1]);
    
        expect(findTheMiddleElement.findMiddle().value).toBe(1);
    });
    
    it('no elements', () => {
        findTheMiddleElement.fill();
    
        expect(findTheMiddleElement.findMiddle().value).toBeUndefined();
        
    });
    
    it('find it O(n)', () => {
        var data = Array.from({length: 1001}, (item, i) => i + 1);
        findTheMiddleElement.fill(data);
        
        let middle = findTheMiddleElement.findMiddle();

        expect(findTheMiddleElement.iterations + 1).toBe(Math.round(data.length / 2));
    });

});