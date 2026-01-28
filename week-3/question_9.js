function strCompress(str){
    if(typeof str != "string"){
        throw new TypeError("Your input must be a string")
    }

    let compressedStr = "";
    let currentChar = str[0];
    let count = 1; 

    for(let i = 1; i < str.length; i++){
        if(str[i] === currentChar){
            count++;
        }else{
            compressedStr += currentChar + (count > 1 ? count : "");
            currentChar = str[i];
            count = 1;
        }
       
    }
    //  handle the one that reach the end
    compressedStr += currentChar + (count > 1 ? count : "");
    return compressedStr
}

console.log(strCompress("aaabbbccdaa"));