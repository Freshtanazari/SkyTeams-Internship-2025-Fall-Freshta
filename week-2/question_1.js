

function countVowels(str) {
    /** counts vowels in a given string 
    
    @param {string} str - The input string 
    @returns {number} - The vowels counts in the string
    @throws {Error} - if the input is not a string
    */

    if (typeof str !== "string"){
        throw new Error("Invalid Input: Expected a string");
    }

    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    
    str = str.toLowerCase().split("")
    for (let letter of str){
        if (vowels.includes(letter)){
            count++
        }
    }
        return count;
}

