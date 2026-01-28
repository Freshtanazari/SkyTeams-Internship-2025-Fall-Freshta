class account{    
    constructor(name, balance){
        if(isNaN(balance) || balance < 0){
            throw new Error("you must input a number greater than 0 ")
        }
        this.name = name;
        this.balance = balance
    }
    deposit(val){
        if(isNaN(val) || val < 0){
            throw new Error("not a valid input")
        }
        this.balance += val;
        return val + "deposited successfully";
    }
    withdraw(val){
        if(isNaN(val) || val < 0){
            throw new Error("you must input a number greater than 0 ")
        }
        if (val > this.balance){
            throw new Error("you want to withdraw more than your balance. ")
        }
        this.balance -= val;
        return val + "deposited successfully";

    }
    displayBalance(){
        return "your account name is: "+ this.name + "\n your balance is: "+ this.balance;
    }
}
let newAccount = new account("Freshta", 100000);
const prompt = require("prompt-sync")({ sigint: true });


function ATM(){
        
    while(true){
        userAction = prompt("please choose an option: a) withdraw b) balance c) deposit d) exit\n");
        if(! ["a", "b", "c", "d"].includes(userAction)){
            console.log("kindly input only valid values [a, b, c, d]");
        }
        console.log(userAction);
        let value;
        switch(userAction){
            case "a":
                value = prompt("Enter the withdrawal ammount: ");
                console.log(newAccount.withdraw(value));
                break;
            case "b": 
                console.log(newAccount.displayBalance());
                break;
            case "c": 
                value = prompt("Enter the deposit ammount: ");
                console.log(newAccount.deposit(value));
                break;
            case "d":
                console.log("You have successfully exitted the program")
                return
        }
    } 
}

ATM();