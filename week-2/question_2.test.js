const reversedNumber = require("./question_2.js");

test("reserveses the digits of a number", ()=>{
    expect(reversedNumber(12345)).toBe(54321);
    expect(reversedNumber(235230)).toBe(32532)
})

test("throws TypeError for non-integer input", ()=> {
    expect(()=> reversedNumber("books")).toThrow(TypeError);
    expect(()=> reversedNumber(12.34)).toThrow(TypeError);
})
