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
    function checkBalance(left, right, center){
            while (right < str.length && left >= 0){
                if(str[right] == str[left]){
                    center = str[left] + center + str[right];
                    right++;
                    left--;
                }else break;
            }
            return center;
    }
    
    let longest = "";
    for(let i = 0; i < str.length ; i++){
        let odd =checkBalance(i-1, i+1, str[i]);
        let even = checkBalance(i, i+1, "");
        if (odd.length > longest.length) longest = odd;
        if(even.length > longest.length) longest = even;
    }
    if(longest.length == 1 ) longest = "no palindromic";
    return longest;
}

