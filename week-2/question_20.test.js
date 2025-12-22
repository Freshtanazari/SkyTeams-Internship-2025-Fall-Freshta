const BMI = require("./question_20.js")

test("Throw TypeError if the inputs cannot be a float", ()=>{
    expect(()=> BMI("a")).toThrow(TypeError);
})

test("Throw Error if the inputs are NAN", ()=>{
    expect(()=> BMI(null)).toThrow(TypeError);
})

test("Throw an Error if the input is negative", ()=>{
    expect(()=>BMI(-23, -2)).toThrow(Error);
})