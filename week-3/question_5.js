function evenBeforeOdd(arr){
    if(!Array.isArray(arr)){
        throw new TypeError("The input must be an array")
    }
    let even = [];
    let odd = [];

    for(let i = 0 ; i < arr.length; i++){
        if(!Number.isInteger(arr[i])){
            throw new TypeError("Every elements must be an integer type")
        }
        if(arr[i] % 2 === 0){
            even.push(arr[i])
        }else{
            odd.push(arr[i])
        }
    }
    // put them togather for an array
    return [...even, ...odd]
}

console.log(evenBeforeOdd([1, 2, 3, 4, 5, 6]))