function sentenceAbbreviator(sentence){
    /**
     * returns the first letter of each word in the sentence into a single string.
     * @param {string} sentence - input sentence 
     * @return {string} - abbreviated string
     * @throws {TypeError} - when the input is not a string
     */
    if(typeof sentence !== "string"){
        throw new TypeError("Input must be a string");
    }
    if(sentence.trim().length === 0){
        throw new Error("Input string cannot be empty")
    }
    let words = sentence.split(" ");
    let abbreviation = "";
    for(let word of words){
        abbreviation += word[0];
    }
    return abbreviation;
}

