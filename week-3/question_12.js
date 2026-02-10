function freqCounter(str){
    /***
     * counts the frequency of each character in the string
     * @param {string} str - input string given 
     * @return {Object} - an object with characters as keys and their frequencies as values 
     * @throws {TypeError} - when the input is not a string
     */
    if( typeof str !== 'string'){
        throw new TypeError("input must be a string");
    }
    let freqObj = {};
    for(let i = 0; i < str.length; i++){
        if(str[i] in freqObj){
            freqObj[str[i]] += 1;
        }else{
            freqObj[str[i]] = 1;
        }
    }
    return freqObj;
}

console.log(freqCounter("Hello world"))