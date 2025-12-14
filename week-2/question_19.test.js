const PyramidPattern = require("./question_19.js");

test("Throws typeError if the input is negative of non-integer ", ()=>{
    expect(()=> PyramidPattern("a")).toThrow(TypeError);
    expect(()=> PyramidPattern(-2)).toThrow(TypeError);
})

test("correctly prints the pyramid pattern", ()=>{
    expect(PyramidPattern(4)).toBe("    *\n   ***\n  *****\n *******\n");
})