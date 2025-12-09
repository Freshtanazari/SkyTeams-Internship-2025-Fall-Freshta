function isPalindrome(num){
    /**
     * checks if an input number is palindrome or tno 
     * @param {integer} num - the input given 
     * @returns {boolean} - true if the number is palindrome, false if it is not 
     * @throws {TypeError} - if the number is not an integer
     * 
     */
    if(!Number.isInteger(num)| num < 0){
        throw new TypeError("The input must a positive integer");
    }
    numStr = num.toString();
    reversedNumStr = "";
    for(let i = numStr.length -1 ; i >= 0; i--){
        reversedNumStr += numStr[i]
    }
    console.log(reversedNumStr);
    reversedNum = parseInt(reversedNumStr)
    if(reversedNum == num ){
        return true
    }else {
        return false
    }
}

module.exports() = isPalindrome;

