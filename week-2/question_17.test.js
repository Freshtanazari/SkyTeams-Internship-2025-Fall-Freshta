const RightAnglePattern = require("./question_17");

test("Throw TypeError when input is less than 0 or the input is not an integer", ()=>{
    expect(()=> RightAnglePattern(-1)).toThrow(TypeError);
    expect(()=> RightAnglePattern("a")).toThrow(TypeError);
})

test("correctly prints the pattern", ()=>{
    expect(RightAnglePattern(3)).toBe("*\n**\n***\n");
})
