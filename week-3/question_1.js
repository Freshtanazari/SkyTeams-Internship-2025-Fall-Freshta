function SecondLargest(arr){
    /**
     * returnst the second largest number in the array time o(n) space O(n) ==> because of set
     * @param {Array} arr - array of numbers
     * @returns {number} - second largest number
     * @throws {TypeError} - if the input is not an array, i or the inputs are not numbers
     * @throws {Error} - if the array has less than 2 unique numbers
     * 
     */

    if(!Array.isArray(arr)){
        throw new TypeError("Input must be an array");
    }
    if(new Set(arr).size < 2){
        throw new Error("Array must have at least 2 unique numbers");
    }

    first = arr[0];
    second = arr[1];
    for(let i = 0; i < arr.length ; i++){
        if(typeof arr[i] !== 'number'){
            throw new TypeError("All elements in the array must be numbers");
        }
        if(arr[i]> first){
            second = first; 
            first = arr[i];
        } else if(arr[i] > second && arr[i] < first){
            second = arr[i];
        }else {
            continue;
        }
    }
    return second;
}

module.exports = SecondLargest;
console.log(SecondLargest([10, 20, 4, 45, 99]))