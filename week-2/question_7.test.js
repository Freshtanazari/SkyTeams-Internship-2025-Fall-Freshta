const sumArray = require("./question_7.js");

test(" returns the total correctly", ()=>{
    expect(sumArray([1, 2, 3, 5, 6])).toBe(17);
    expect(sumArray([-1, -2])).toBe(-3);
})
test("returns 0 for empty array", ()=>{
    expect(sumArray([])).toBe(0);
})
test("throws TypeError for non-array input and arrays with non-number elements", ()=>{
    expect(()=> sumArray("not")).toThrow(TypeError);
    expect(()=> sumArray([1, 3, "c"])).toThrow(TypeError);
})