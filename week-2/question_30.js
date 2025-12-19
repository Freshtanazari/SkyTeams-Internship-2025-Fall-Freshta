function findMissing(arr){
    /**Note: The array must be sorted before being inputted to this function
     * it returns the missing number from 1 to N in the array with O(n) time and O(n worst)  space complexity
     * @param {Array} arr - the input array 
     * @return {array} - the missing numbers
     * @throws {TypeError} - if the input is not an array
     */
    if(!Array.isArray(arr)){
        throw new TypeError("Only enter an array as input");
    }
    if(arr.length === 0){
        throw new TypeError("your array is empty");
    }
    let missingNum = 0;
    for(let i = 0; i < arr.length; i++){
        if(!Number.isInteger(arr[i])){
            throw new TypeError("Array should be populated with integers from 1 to N");
        }
    }
    for(let i = 0; i < arr.length -1 ; i++){
        if(arr[i] != i + 1){
            missingNum = i+1;
            return missingNum;
        }
    }
    return missingNum;
    
}
module.exports = findMissing;
