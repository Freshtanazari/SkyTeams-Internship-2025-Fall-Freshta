const findIn = require("./question_8.js");

test("returns true of false correctly", ()=>{
    expect(findIn([1, 3, 5, 5, "b", "book"], "book")).toBe(true);
    expect(findIn([1, 3, 6, "8"], 8)).toBe(false);
    expect(findIn([], 1)).toBe(false);
})

test("Throws TypeError if the input is not array", ()=>{
    expect(()=> findIn("not")).toThrow(TypeError);
})