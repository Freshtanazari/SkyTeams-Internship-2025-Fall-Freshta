const isPalindrome = require("./quesiton_12.js");

test("Returns the correct true or false input", ()=>{
    expect(isPalindrome(121)).toBe(true);
    expect(isPalindrome(100)).toBe(false);
})

test("throws an type error for non-integers or negative integers", ()=>{
    expect(isPalindrome("b")).toThrow(TypeError);
    expect(isPalindrome(-235)).toThrow(TypeError);
})

test("Correctly handles 0", ()=>{
    expect(isPalindrome(0)).toBe(true)
})