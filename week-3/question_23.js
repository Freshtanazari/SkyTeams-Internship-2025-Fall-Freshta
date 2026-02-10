function topKFrequentElement(arr, k){
    /**
     * returns a number that shows the top kth frequenet elements
     */

    if(!Array.isArray(arr) | ! Number.isInteger(k)){
        throw new TypeError("The input must be an array and an integer")
    }

    // add frequencies of the array
    let arrFreq = new Map()
    for(let i = 0; i < arr.length; i++){
        if(!arrFreq.has(arr[i])){
            arrFreq.set(arr[i], 1)
        }else{
            arrFreq.set(arr[i],arrFreq.get(arr[i])+1  )
         }
    }
    arr = [...arrFreq]
    arr.sort((a, b) => b[1] - a[1])
    result = []
    for(let i = 0; i < k; i++){
        result.push(arr[i][0])
    }
    return result;
}

console.log(topKFrequentElement([1,1,1,2,2,3], 2))