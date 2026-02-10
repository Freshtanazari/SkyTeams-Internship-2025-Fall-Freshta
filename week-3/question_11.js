function isRotation(str1, str2){
    /**
     * checks if the second string is a rotation of the first string with O(n2) time complexity 
     * 
     * @param {string} str1 - first input string 
     * @return {boolean} - true if str2 is a rotation of str1, else fals 
     * @throws {TypeError} - when either input is not a string
     */
    if(typeof str1 != "string" || typeof str2 != "string"){
        throw new TypeError("Both inputs must be strings")
    }
    if(str1.length !== str2.length){
        return false;
    }
    let boundry = str2.length - 1;

    while(boundry >= 0){
        let rotator = str2.slice(boundry, str2.length)
        let remainder = str2.slice(0, boundry)
        let rotatedStr = rotator + remainder;
        if(rotatedStr === str1){
            return true;
        }else{
            boundry--;
        }
    }
    return false;
}


function simpleIsRotation(str1, str2){
     /**
     * checks if the second string is a rotation of the first string with O(n) time complexity
     * 
     * @param {string} str1 - first input string 
     * @return {boolean} - true if str2 is a rotation of str1, else fals 
     * @throws {TypeError} - when either input is not a string
     */
    if(typeof str1 != "string" || typeof str2 != "string"){
        throw new TypeError("Both inputs must be strings")
    }
    if(str1.length !== str2.length){
        return false;
    }

    let doubleStr2 = str2 + str2;
    let start = 0;
    let end = str1.length;
    while(end <= doubleStr2.length){
        console.log(doubleStr2)
        console.log(doubleStr2.slice(start, end))
        if(str1 == doubleStr2.slice(start, end)){
            return true;
        }
        else{
            start++;
            end++;
        }
    }
    return false;
}
console.log(simpleIsRotation("waterbottle", "erbottlewat"));
