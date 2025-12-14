function passwordChecker(pwd){
    /**
     * checks if the password is strong enough, at least 8 chars, one upperCase, one lowercase and one number
     * @param {pwd} - the given input
     * @return {string} - Weak or Strong based on the evaluation 
     * @throws {TypeError} - if the input is empty
     */
    if(pwd == null){
        throw new TypeError("Enter an input please");
    }
    pwd = pwd.toString();
    if(pwd.length < 8 ){
        return "Weak";
    }
    let lower = false;
    let upper = false;
    let number = false;
    for(let i = 0; i < pwd.length; i++){
        code = pwd.charCodeAt(i)
        if(code >= 48 && code <= 57){
            number = true;
        }else if(code >= 65 && code <= 90){
            upper = true;
        }else if(code >= 92 && code <= 122){
            lower = true
        }
    }
    if(upper && lower && number){
        return "Strong";
    }else{
        return "Weak";
    }
}

module.exports = passwordChecker;
