const { Readline } = require('readline/promises');

function guess(){
    /**
     * the program selects a number between 1 and 100 the user must guess
     * @returns {string} - Too high, Too low, or correct
     * @throws {TypeError} - if the the input is not a number
     * 
     */
  const prompt = require('prompt-sync')();

   let target = Math.random()
   target = Math.ceil(target * 100);

   while(true){
    input = prompt("Guess a number between 1 to 100?     ");
    if(input > target){
      console.log("Too high")
    }
    if(input < target){
      console.log("Too low")
    }
    if(input == target){
      console.log("Correct");
      return 
    }
   }
}
guess();