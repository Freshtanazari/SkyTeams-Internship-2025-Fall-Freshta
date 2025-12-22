function sumArray(arr){
    /**
     * returns the total sum of all array elements
     * @param  {Array} arr - input array 
     * @return {number} - sum of all the elements
     * @throws {TypeError} - if the input is not an array or the elements are not numbers
     */
    if (!Array.isArray(arr)){
        throw new TypeError("Input must be an array");
    }
    if (arr.length == 0 ){
        return 0;
    }
    let total = 0; 
    let i = 0 

    while(i < arr.length){
        if (typeof arr[i] !== "number"){
            throw new TypeError("All array elements must be a number");
        }
        total += arr[i];
        i++;
    }
    return total;
}

module.exports = sumArray;
console.log(sumArray([1.4, 2, 5, 6]))
