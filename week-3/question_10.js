function hasUniqueChars(str){
    /**
     * checks if the string has all unique chars only 
     * 
     * @param {string} str - input string given
     * @return {boolean} -true if all chars are unique, else false
     * @throws {TypeError} - when the input is not a string
     */
    if(typeof str !== "string"){
        throw new TypeError("Input must be a string");
    }

    for(let i = 0; i < str.length; i++){
        for(let j = i + 1; j < str.length; j++){
            if(str[i] === str[j]){
                return false;
            }
        } 
    }
    return true;
}

console.log(hasUniqueChars(""))