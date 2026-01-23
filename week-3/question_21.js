const Stack = require('./question_18')
function longestPalindromic(str){
    /**
     * returns the longest palindromic substring
     * @param {string} str - the input given as string
     * @returns {string} - returns the subset that is palindromic among the given input
     * @throws {TypeError} - if the input is not a string
     */

    if(typeof str != "string"){
        throw new TypeError("the input must only be strings")
    }
    let chars = str.trim().split("");
    // using a two stacks

    let backward = [];
    let end = chars.length - 1
    while(end >= 0 ){
        backward.push(chars[end])
        end--;
    }

    console.log(chars)
    console.log(backward)

    let longestSubstring = "";
    let subString = "";
    // let currentChar = chars[0]
    for(let j = 0; j < chars.length; j++){
        for(let i = 0; i < backward.length; i++){
            if(chars[j] == backward[i]){
                subString += chars[j];
                // console.log(subString)
            }else{
                if(subString.length > longestSubstring.length){
                    longestSubstring = subString;
                    subString = "";
                }
            }
        }
        subString = "";
    }
    return longestSubstring;
}

// console.log(longestPalindromic("babad"))
// console.log(longestPalindromic("racecar"))
console.log(longestPalindromic("xyzzy"));
