const countVowels = require("./question_1.js");

test("counts vowels correctly", () => {
    expect(countVowels("Hello world")).toBe(3);
});

test("returns 0 for an empty string", () => {
    expect(countVowels("")).toBe(0);
});

test("throws error for invalid inputs", () => {
    expect(() => countVowels(123)).toThrow("Invalid Input: Expected a string");
});