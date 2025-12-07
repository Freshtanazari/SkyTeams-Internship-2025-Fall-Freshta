function max(array){
    /**
     * Finds the Maximum number in the given array
     * @param {number[]} array - the given array of numbers
     * @returns {number} - The max number
     * @throws {TypeError} - if the input is not an array, or the elements are not number
     * @throws {Error} - if the array is empty
     */

    if(!Array.isArray(array)){
        throw new TypeError("Input must be an array");
    }
    if(array.length === 0){
        throw new Error("Array cannot be empty");
    }
    currMax = array[0];
    for (let i = 1; i < array.length; i++){
        if(typeof array[i] !== "number"){
            throw new TypeError("All elements in the array must be of type number");
        }
        if(array[i] > currMax){
            currMax = array[i];
        }else{
            continue;
        }
    }
    return currMax
}


