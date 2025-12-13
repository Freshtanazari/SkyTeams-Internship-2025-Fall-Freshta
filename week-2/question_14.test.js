const factorial  = require("./question_14.js")

test("Output the correct factorial results", ()=>{
    expect(factorial(5)).toBe(120);
})

test("Throws TypeError for non numbers", ()=>{
    expect(()=> factorial("b")).toThrow(TypeError);
})
test("Throws Error for negative integers", ()=>{
    expect(()=> factorial(-1).toThrow(Error))
})
test("Correctly find the factorial of 0", ()=>{
    expect(factorial(0)).toBe(1)
})