const sumOfDigits = require("./question_3.js");

test("returns sum of digits correctly", ()=>{
    expect(sumOfDigits(12345)).toBe(15);
});

test("throws TypeError for non-integers and negative integers", ()=>{
    expect(()=> sumOfDigits(-123)).toThrow(TypeErrpr);
    expect(()=> sumOfDigits(12.4)).toThrow(TypeError);
    expect(()=> sumOfDigits("abc")).toThrow(TypeError);
})

