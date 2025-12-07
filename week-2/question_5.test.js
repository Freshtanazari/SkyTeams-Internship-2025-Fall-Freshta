const max = require("./question_5.js");
test("returns the maximum number correctly", ()=>{
    expect(max([1, 2, 3, 4, 5, 6])).toBe(6);
})
test("Throws an error for non array inputs", ()=>{
    expect(()=>max("not an array")).toBe(TypeError);
})
test("Throws an error for empty arrays", ()=>{
    expect(()=> max([])).toBe(Error);
})
test("Throws an error if elements in an array are not nuumbers", ()=>{
    expect(()=> max([1, 3, "n"])).toBe(TypeError);
})