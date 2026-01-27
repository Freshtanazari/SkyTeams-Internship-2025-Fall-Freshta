function maxSubArray(arr){
    /**
     * returns the subarrray that has the maximum sum brute force method
     * @param {Array} arr - input given as an array 
     * @return {Array} - the max sub array 
     * @throws  {TypeError} - if the input is not an array
     */
    if(!Array.isArray(arr)){
        throw new TypeError("The input must be an array")
    }
    for(element of arr){
        if(typeof element != "number"){
            throw new TypeError("every element in the array must be a number")
        }
    }

    // my approach is to create subarray for each element shifting to the right in each iteration
    let largestSum = -Infinity;

    for(let i = 0; i < arr.length ; i++){
        let sum = arr[i]
        for(let j = i + 1; j < arr.length; j++){
            sum += arr[j]
            if (sum > largestSum){
                largestSum = sum
            }
        }
    }
    return largestSum;
}

function maxSubArrayV2(arr){
    /**
     * returns the subarrray that has the maximum sum kadane's algorithm
     * @param {Array} arr - input given as an array 
     * @return {Array} - the max sub array 
     * @throws  {TypeError} - if the input is not an array
     */
    if(!Array.isArray(arr)){
        throw new TypeError("The input must be an array")
    }
    for(element of arr){
        if(typeof element != "number"){
            throw new TypeError("every element in the array must be a number")
        }
    }

    let largestSum = -Infinity;
    let currentSum = 0;

    for(let i = 0 ; i < arr.length ; i++){
        if(currentSum < 0 ){
            currentSum = 0; // reset it
        }
        currentSum += arr[i]
        if(currentSum > largestSum ){
            largestSum = currentSum;
        }  
    }
    return largestSum;
}

console.log(maxSubArrayV2([-2,1,-3,4,-1,2,1,-5,4]))
