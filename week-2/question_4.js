function factors(num){
    /** 
     * returns all the factors of a given number
     * 
     * @param {number} num - The input number
     * @returns {number[]} - An array of factors of the input
     * @throws {TypeError} - If the input is not an integer
     */

    try {
        num = Number(num);
    }catch(e){
        throw new TypeError("Input must be a number");
    }
    if (!Number.isInteger(num)){
        throw new TypeError("Input must be an integer");
    }
    let factorsArray = [];
    for (let i = 1; i <= Math.abs(num); i++){
        if (num % i === 0){
            factorsArray.push(i)
        }
    }
    return factorsArray;
}
