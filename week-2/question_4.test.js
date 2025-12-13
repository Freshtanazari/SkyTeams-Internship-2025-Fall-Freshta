const factors = require("./question_4.js")

test("returns correct factors", () =>{
    expect(factors(12)).toEqual([1, 2, 3, 4, 6, 12]);
    expect(factors(15)).toEqual([1, 3, 5,15]);
    expect(factors(-5)).toEqual([1, 5]);
})

test("Throws TypeError for non-integer inputs", () =>{
    expect(()=> factors(4.5)).toThrow(TypeError);
})