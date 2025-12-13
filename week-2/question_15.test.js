const isArmstrong = require("./question_15.js")

test("Returns the true if armstrong", ()=>{
    expect(isArmstrong(153)).toBe(true)
})

test("Returns false if not armstrong", ()=>{
    expect(isArmstrong(235)).toBe(false)
})

test("returns true for 0", ()=>{
    expect(isArmstrong(0)).toBe(true)
})

test("Throws TypeError if the input is not a number", ()=>{
    expect(()=> isArmstrong("a")).toThrow(TypeError);
})

test('Throws Error if the input is not positive integer', ()=>{
    expect(()=> isArmstrong(-1)).toThrow(Error)
})