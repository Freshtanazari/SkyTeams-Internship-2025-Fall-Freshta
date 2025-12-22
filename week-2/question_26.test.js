const getBinary = require("./question_26.js");

test("throws typeError if the input is not a positive integer", ()=>{
    expect(()=> getBinary("a")).toThrow(TypeError);
})

test("Throw typeError if the inptu is negative", ()=>{
    expect(()=> getBinary(-1)).toThrow(TypeError);
})

test("correctly converts a decimal into an bianry", ()=>{
    expect(getBinary(10)).toBe("1010");
})