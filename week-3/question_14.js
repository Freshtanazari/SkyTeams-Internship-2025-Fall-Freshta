function permuteString(str){
    /**
     * generates all permuatations of the input string
     * 
     * @param {string} str - input string given
     * @return {Array} - array of all permutations of the string
     * @throws {TypeError} - when the input is nto a string
     * 
     */
    if( typeof str != "string"){
        throw new TypeError("input must be a string");
    }
    let uniqueElements = new Set(str.split(""))
    // get the unique elements for permutation
    let arrayUnique = [...uniqueElements]
    let allpremutations = permute(arrayUnique)

    function permute(arr){
        if(arr.length == 1){
            return [arr[0]]
        }
        let all = []
        for(let i = 0 ; i < arr.length; i++){
            let fix = arr[i]
            let remainder = arr.slice(0, i).concat(arr.slice(i+1)) 
            perms = permute(remainder)
            for (p of perms) {
                all.push(fix + p)
            }
        }
        return all
    }
    return allpremutations; 
    
}

