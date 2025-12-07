function sumOfDigits(num){
    /**
     * @param {number} num - an integer number
     * @return {number} - sum of the digits of the numb
     * @throws {TypeError} - If the input is a positive integer
     */

    try {
        num = Number(num);
    }catch(error){
        throw new TypeError("Input must be a number");
    }
    if (!Number.isInteger(num) | num < 0){
        throw new TypeError("Input must be a positive integer");
    }
    let sum = 0;
    numStr = num.toString();
    for (let i = numStr.length-1; i >=0 ; i--){
        sum += Number(numStr[i]);
    }
    return sum;
}

