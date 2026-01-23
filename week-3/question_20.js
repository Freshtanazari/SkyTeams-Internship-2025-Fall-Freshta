function parenthesisIsBalanced(str){
    /**
     * checks if the paranthesis are balanced or not 
     * @param {string} str - the input with paranthesis
     * @return {string} - returns yes or no accordingly
     * @throws {TypeError} - if the input is not a string
     * @throws {Error} - if the input is doesnt have paranthesis 
     */
    const ValidParentheses = ['(', ')', '[', ']', '{', '}', '<', '>'];
    if(typeof str != "string"){
        throw new TypeError("only strings are valid as inputs")
    }

    // clean the input
    let inputtedParantheses = str.trim().split("");
    console.log(inputtedParantheses)
    if(inputtedParantheses.length % 2 != 0){
        return false
    }

    // check if the input only has paranthesis
    for(char of inputtedParantheses){
        if(!ValidParentheses.includes(char)){
            throw new Error("your input must only contain parentheses")
        }
    }

    let start = 0;
    let end = inputtedParantheses.length -1;

    while(start < (inputtedParantheses.lengths)/ 2){
        if(inputtedParantheses[start] != inputtedParantheses[end]){
            console.log("this has run")
            return false
        }
        start++;
        end--;
    }
    return true
}

console.log(parenthesisIsBalanced("{[[])]}"))
