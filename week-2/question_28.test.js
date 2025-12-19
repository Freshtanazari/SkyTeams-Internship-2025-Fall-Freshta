const rmDuplicates = require("./question_28.js");

test("Throws TypeError if the input is not an array", ()=>{
    expect(()=> rmDuplicates("A")).toThrow(TypeError);
})

test("correctly removes duplicates from an array", ()=>{
    expect(rmDuplicates([3, 1, 3, 5, 1])).toEqual([3, 1, 5]);
    expect(rmDuplicates([])).toEqual([]);

})