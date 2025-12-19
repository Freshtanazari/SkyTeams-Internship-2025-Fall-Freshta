const isEqual = require("./question_29.js");

test("Throws TypeError for non array inputs", ()=>{
    expect(()=> isEqual("A", "A")).toThrow(TypeError);
    expect(()=> isEqual([], "A")).toThrow(TypeError);
})

test("Correctly compares two arrays", ()=>{
    expect(isEqual([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(isEqual([1, 2, 3], [1, 2, 4])).toBe(false);
    expect(isEqual([], [])).toBe(true);
})