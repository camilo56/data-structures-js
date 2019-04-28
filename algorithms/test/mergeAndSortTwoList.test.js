var mergeAndSortTwoList = require("../linkedList/mergeAndSortTwoList");

describe('Find the middle node', () => {
    
    it('one element', () => {
        mergeAndSortTwoList.fill([1], [2]);
    
        expect(mergeAndSortTwoList.mergeAndSort().value).toEqual(JSON.stringify({value: 1, next: {value: 2, next: null}}));
    });
    
/*     it('no elements', () => {
        mergeAndSortTwoList.fill();
    
        expect(mergeAndSortTwoList.mergeAndSort().value).toBeUndefined();
        
    });
    
    it('check sorted', () => {
        mergeAndSortTwoList.fill([2,4,5,9], [1,3,6,10]);
    
        expect(mergeAndSortTwoList.mergeAndSort().value).toEqual(JSON.stringify({value: 1, next: {value: 2, next: 
                                                                                {value: 3, next: {value: 4, next: 
                                                                                {value: 5, next: {value: 6, next: 
                                                                                {value: 9, next: {value: 10, next: null}}}}}}}})
                                                                );
    });
    
    it('good case O(n + m)', () => {
        mergeAndSortTwoList.fill([1,2,3,4], [5,6,7,8]);
        mergeAndSortTwoList.mergeAndSort();

        expect(mergeAndSortTwoList.iterations).toBe(4);
    }); */
   
/*     it('worse case O(n + m)', () => {
        var data1 = Array.from({length: 100}, (item, i) => i + 101);
        var data2 = Array.from({length: 100}, (item, i) => i + 1);
        
        mergeAndSortTwoList.fill(data1, data2);
        mergeAndSortTwoList.mergeAndSort();

        expect(mergeAndSortTwoList.iterations + 1).toBe(data1.length + data2.length);
    }); */

});