function reverseNumber(num){
    /**
     * @param {number} num - The input number
     * @return {number} - The reversed number
     * @throws {TypeError} - If the input is not a number or an integer. 
    */
    try {
        num = Number(num);
    }catch(error){
        throw new TypeError("Input must be a number");
    }
    if (!Number.isInteger(num) | num <0 ){
        throw new TypeError("Input must be a positive integer");
    }
    let reversedNum = ""
    let numStr = num.toString();
    for (let i = numStr.length - 1; i >= 0 ; i--){
        reversedNum += numStr[i];
    }
    return Number(reversedNum);
}

console.log(reverseNumber("-200"));