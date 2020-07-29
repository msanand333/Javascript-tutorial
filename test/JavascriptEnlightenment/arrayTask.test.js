const {findElement} = require('../../JavascriptEnlightenment/arrayTask');
var arr=[1,2,3,4,5];

test('Return the value present in the passed index',()=>{
    expect(findElement(arr,3)).toBe(4);
});

test('Return null if no value is passed',()=>{
    expect(findElement()).toBe(null);
})

test('Return null if the passed argument are not proper',()=>{
    expect(findElement("anand","test")).toBe(null);
})

test('Return null if the passed index is greater than the length of the array',()=>{
    expect(findElement(arr,10)).toBe(null);
})

test('Return null if the passed index is negative',()=>{
    expect(findElement(arr,-1)).toBe(null);
})