const factorial = require("./question_14.js");

test("throws type error if the input is not an integer ", ()=>{
    expect(()=> factorial("a")).toThrow(TypeError);
})

test("throws type error if the input is negative integer", ()=>{
    expect(()=> factorial(-3)).toThrow(TypeError)
})

test("Correctly returns factorial of 0", ()=>{
    expect(factorial(0)).toEqual(1);
})

test("Correctly returns factorial of above 0", ()=>{
    expect(factorial(5)).toBe(120);
})
