const reverseNumber = require("./question_2.js");

test("reserveses the digits of a number", ()=>{
    expect(reverseNumber(12345)).toBe(54321);
    expect(reverseNumber(235230)).toBe(32532)
})

test("throws TypeError for non-integer input", ()=> {
    expect(()=> reverseNumber("books")).toThrow(TypeError);
    expect(()=> reverseNumber(12.34)).toThrow(TypeError);
})
