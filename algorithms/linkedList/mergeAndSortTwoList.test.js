var mergeAndSortTwoList = require("./mergeAndSortTwoList");
const LinkedList = require("../../structures/LinkedList.class");
var fillList = require("../../utils/FillList");

describe('Find the middle node', () => {
    
    beforeEach(() => {
        mergeAndSortTwoList.clear();
    });

    it('one element', () => {
        let listOne = fillList(LinkedList, [1])
        let listTwo = fillList(LinkedList, [2])
        var merged = mergeAndSortTwoList.merge(listOne, listTwo);

        expect(merged.show()).toEqual(JSON.stringify({"value": 1, "next": {"value": 2, "next": null}}));
    });
    
    it('no elements', () => {
        var merged = mergeAndSortTwoList.merge();
    
        expect(merged).toBeNull();
        
    });
    
    it('check sorted', () => {
        let listOne = fillList(LinkedList, [1,3,6,10])
        let listTwo = fillList(LinkedList, [2,4,5,9])

        let merged = mergeAndSortTwoList.merge(listOne, listTwo);

        expect(merged.show()).toEqual(JSON.stringify({value: 1, next: {value: 2, next: 
                                                    {value: 3, next: {value: 4, next: 
                                                    {value: 5, next: {value: 6, next: 
                                                    {value: 9, next: {value: 10, next: null}}}}}}}}));
    });

    it('good case O(n + m)', () => {
        let listOne = fillList(LinkedList, [1,2,3,4]);
        let listTwo = fillList(LinkedList, [5,6,7,8]);

        let merged = mergeAndSortTwoList.merge(listOne, listTwo);
        
        expect(mergeAndSortTwoList.iterations).toBe(4);
        expect(merged.show()).toEqual(JSON.stringify({value: 1, next: {value: 2, next: 
                                                    {value: 3, next: {value: 4, next: 
                                                    {value: 5, next: {value: 6, next: 
                                                    {value: 7, next: {value: 8, next: null}}}}}}}}))

    });
   
    it('worse case O(n + m)', () => {
        var data1 = Array.from({length: 100}, (item, i) => (i + 1) * 2);
        var data2 = Array.from({length: 100}, (item, i) => (i + 1) * 7);

        let listOne = fillList(LinkedList, data1)
        let listTwo = fillList(LinkedList, data2)
        
        mergeAndSortTwoList.merge(listOne, listTwo);

        expect(mergeAndSortTwoList.iterations).toBeLessThanOrEqual(data1.length + data2.length);
    });

});