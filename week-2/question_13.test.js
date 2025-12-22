const power = require("./question_13.js")

test("returns the correct answer for a simple power", ()=>{
    expect(power(2,2)).toBe(4);
})
test("correctly handles 0 values", ()=>{
    expect(power(2,0)).toBe(1);
})
test("correctly handles 0 values for base", ()=>{
    expect(power(0,2)).toBe(0);
})
test("Correctly handles negative base", ()=>{
    expect(power(-1, 2)).toBe(1);
    expect(power(-1,3)).toBe(-1)
})
test("Correctly handles negative power and float inputs", ()=>{
    expect(power(2,-1)).toBe(0.5)
    expect(power(2.0, -1)).toBe(0.5)
})
test("Throws TypeError if the inputs are not number", ()=>{
    expect(()=>power("a", "b")).toThrow(TypeError)
})