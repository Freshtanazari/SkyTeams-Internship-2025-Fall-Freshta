const SecondLargest = require("./question_1.js");

test("Finds the second largest number in a normal array", ()=>{
    expect(SecondLargest([10, 20, 4, 45, 99])).toBe(45);
    expect(SecondLargest([-1, -2, -3, -4])).toBe(-2);
})

test("throws typeError if input not an array or element not a number", ()=>{
    expect(() => SecondLargest("123")).toThrow(TypeError);
    expect(()=> SecondLargest([1, 2, "3"])).toThrow(TypeError);
})

test("Throws error if array has less than 2 unique numbers", ()=>{
    expect(()=> SecondLargest([1, 1, 1])).toThrow(Error);
})
