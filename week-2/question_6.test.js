const min = require("./question_6.js");
test("finds the minimum correctly", ()=>{
    expect(min([2, 352, -3])).toBe(-3);
})
test("Throws TypeError when the input is not an array or the elements are not number", ()=>{
    expect(()=> min("not an array")).toThrow(TypeError);
    expect(()=> min([2, 3, "c"])).toThrow(TypeError);
})
test("Throws Error wheen the input is an empty", ()=>{
    expect(()=> min([])).toThrow(Error);
})