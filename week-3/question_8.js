class account{    
    constructor(name, balance){
        this.name = name;
        this.balance = balance
    }
    deposit(val){

    }
    withdraw(val){
        
    }
    displayBalance(){
        return "your account name is: "+ this.name + "\n your balance is: "+ this.balance;
    }
}


function ATM(){
    userAction = prompt("please choose an option:\n a) withdraw\n b) balance\n c) deposit\n d) exit\n");

    if(! userAction.includes(["a", "b", "c", "d"])){
        return "kindly input only valid values [a, b, c, d]";
    }
    
    function withdraw(val){
        if(!Number(val)){
            return "Only input valid numbers"
        }
    }
    function deposit(val){
        if(!Number(val)){
            return "Only input valid numbers"
        }
    }
    function displayBalance(){
        
    }

    switch(userAction){
        case a:
            let value = prompt("Enter the withdrawal ammount: ");
            withdraw(value);
        case b: 
            displayBalance();
        case c: 
            deposit(val);
        case d:
            return
    }
    
}