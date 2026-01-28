function patternExists(sentence, pattern){
    /**
     * checks if the given pattern exists in the sentence 
     * @param {string} sentence - input sentence as string 
     * @param {string} pattern - pattern to search for in the sentence
     * @returns  {boolean} - true if pattern exists in the sentence, else false
     * @throws {TypeError} - when either input is not a string
     */
    if( typeof sentence !== "string" || typeof pattern !== "string"){
        throw new TypeError("Both inputs must be strings");
    }
    let patternArray = pattern.split("");
    let wordArray = sentence.split(" ");
    let wordObj = {};
    let patternObj = {};
    if(patternArray.length != wordArray.length){
        return false;
    }
      console.log(patternArray)
        console.log(wordArray)
    for(let i = 0; i < wordArray.length; i++){
        if(!(patternArray[i] in wordObj) && !(wordArray[i] in patternObj)){
            wordObj[patternArray[i]] = wordArray[i];
            patternObj[wordArray[i]] = patternArray[i];
        }else if(wordObj[patternArray[i]] != wordArray[i] || patternObj[wordArray[i]] != patternArray[i]){
            return false;
        }else{
            continue;
            }
    }
    return true;
}


function patternExistsV2(sentence, pattern){
    /**
     * checks if the given pattern exists in the sentence 
     * @param {string} sentence - input sentence as string 
     * @param {string} pattern - pattern to search for in the sentence
     * @returns  {boolean} - true if pattern exists in the sentence, else false
     * @throws {TypeError} - when either input is not a string
     */
    if( typeof sentence !== "string" || typeof pattern !== "string"){
        throw new TypeError("Both inputs must be strings");
    }
    let patternArray = pattern.split("");
    let wordArray = sentence.split(" ");
    if(patternArray.length != wordArray.length){
        return false;
    }
    let encodedPattern = [];
    let encodedWords = [];
    for(let i = 0; i < patternArray.length; i++){
        // encode the pattern according to the first occurence index
        encodedPattern.push(patternArray.indexOf(patternArray[i]))
        encodedWords.push(wordArray.indexOf(wordArray[i]))
    }
    if(encodedPattern.toString() === encodedWords.toString()){
        return true
    }
    return false;

}
console.log(patternExistsV2("dog cat cat dog", "abba"))