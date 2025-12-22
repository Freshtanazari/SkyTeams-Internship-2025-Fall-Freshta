function BMI(wgt, hgt){
    /**
     * determines if someone is underweight, normal or overweight
     * @param {Number} wgt - the weight given as input 
     * @param {Number} hgt - the height given as input
     * @returns  {string} - [Underweight, Normal weight, overweight]
     * @throws {TypeError} - if the input are not number or isNAN
     * @throws {Error} - if the input is negative
     */
    try{
        wgt = parseFloat(wgt);
        console.log(wgt)
        hgt = parseFloat(hgt); 
        console.log(hgt) 
        if (isNaN(wgt) || isNaN(hgt)) {
            throw new TypeError("Please enter a number");
        }
    }catch (err) {
        throw new TypeError("Please enter an input that is a number");
    }
    if(hgt > 2.5){
        throw new Error("Please enter a realistic height in meters for EX: 1.75")
    }

    if(wgt < 0 || hgt < 0){
        throw new Error("weight and height cannot be negative")
    }
    BMI = wgt/(hgt ** 2)
    BMI = BMI.toFixed(2)

    if(BMI < 18.5){
        return "BMI = "+BMI+ " (Underweight)";
    }else if(BMI < 25){
        return "BMI = "+BMI+ " (Normalweight)";
    }else if(BMI < 30){
        return "BMI = "+BMI+ " (Overweight)";
    }else{
        return "BMI = "+BMI+ " (Obese)"
    }
}

module.exports = BMI;

console.log(BMI(70, 1.75))