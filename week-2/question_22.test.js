const collatzSeq = require("./question_22.js");

test("Throws TypeError if input is not an integer or above 0 ", ()=>{
    expect(()=> collatzSeq(0)).toThrow(TypeError);
    expect(()=> collatzSeq("a")).toThrow(TypeError);
    expect(()=>collatzSeq(-2)).toThrow(TypeError);
})

test("if the function output correctly", ()=>{
    expect(collatzSeq(6)).toBe("6,3,10,5,16,8,4,2,1 (Steps: 8)");
})