const uniqueArr = require("./question_27.js");

test("Throws a TypeError if the input is not an array", ()=>{
    expect(()=> uniqueArr(4)).toThrow(TypeError);
})

test("Correctly returns unique elements of an array", ()=>{
    expect(uniqueArr([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(uniqueArr(["a", "b", "a", "c", "B"])).toEqual(["a", "b", "c", "B"]);
})