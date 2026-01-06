function rotateArray(arr, k = 0){
    /**
     * returns the rotated array by k times to the right
     * @param {Array} arr- array of elements 
     * @param {integer} k - number of times to rotate the array
     * @return {Array} -rotated array
     * @throws {TypeError} - if the input is not an array of if k is not an integer
     */
    if(!Array.isArray(arr) || !Number.isInteger(k)){
        throw new TypeError("Input must be an array adn k must be an integer")
    }

    rotatedArray = [];
    // add the last k elements first
    while( k > 0 ){
        rotatedArray.push(arr[arr.length - k]);
        k--;
    }
    // add the rest of the array
    let i = 0;
    while(rotatedArray.length < arr.length ){
        rotatedArray.push(arr[i])
        i++;
    }

    return rotatedArray;
}

console.log(rotateArray([1,2,3, "b", 5], k = 2))