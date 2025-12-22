const RightAlignedPattern = require("./question_18.js")

test("Throws TypeError if the input is not a positive integer", ()=>{
    expect(()=> RightAlignedPattern("b")).toThrow(TypeError);
    expect(()=> RightAlignedPattern(-1)).toThrow(TypeError);
})

test("Correclty returns the pattern", ()=>{
    expect(RightAlignedPattern(4)).toBe("   *\n  **\n ***\n****\n");
})