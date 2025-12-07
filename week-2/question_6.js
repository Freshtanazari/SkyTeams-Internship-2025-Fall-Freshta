function min(arr){
    /**
     * returns the smallest element in an array
     * @param {Array} arr - input array
     * @return {number} - smallest number
     * @throws {Error} - if the array is empty
     * @throws {TypeError} - if the array is not numbers or the input is not an array at all
     */

    if (!Array.isArray(arr)){
        throw new TypeError("Input an Array");
    }
    if (arr.length === 0 ){
        throw new Error("input Array cannot be empty");
    }
    currMin = arr[0]
    for (let i = 0; i < arr.length; i++){
        if(typeof arr[i] !== "number"){
            throw new TypeError("Array must be only of type Number")
        }
        if (arr[i] < currMin){
            currMin = arr[i]
        }
    }
    return currMin;
}
