const findMissing = require("./question_30.js");

test("Throws typeerror for non array inputs", ()=>{
    expect(()=> findMissing("A")).toThrow(TypeError);
    expect(()=> findMissing([1, "a"])).toThrow(TypeError);
})

test("Correctly finds the missing number in the array", ()=>{
    expect(findMissing([1, 2, 4, 5])).toEqual(3);
    expect(findMissing([1, 2, 3])).toEqual(0)
    expect(findMissing([2, 3])).toEqual(1);
})
