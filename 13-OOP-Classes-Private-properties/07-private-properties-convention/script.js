// Encapsulation -> data or hiding specific properties and methods of a class. In java we have private keyword but in javascrip we don't have those keywords butthere is a convention that's commonly used to indicate that a property or a method is private and that's the underscore(_) .

// ( _ ) -> tells the developer that's using that class or constructor function that you cant or you shouldn't use the properties outside of the class. 

class Wallet{
    constructor(){
        this._balance = 0;
        this._transactions = [];
    }

    deposit(amount){
        this._processDeposit(amount);
        this._balance += amount;
    }

    withdraw(amount){
        if(amount > this._balance){
            console.log('Not enough funds');
            return;
        }
        this._processWithdraw(amount);
        this._balance -= amount;
    }

    _processDeposit(amount){
        console.log(`Depositing ${amount}`);

        this._transactions.push({
            type: 'deposit',
            amount
        })
    } 

    _processWithdraw(amount){
        console.log(`Withdrawing ${amount}`);

        this._transactions.push({
            type: 'withdraw',
            amount
        });
    }

    // getBalance(){
    //     return this._balance;
    // }

    get balance(){
        return this._balance;
    }

    get transactions(){
        return this._transactions;
    }

}

const wallet = new Wallet();
wallet.deposit(300);
wallet.withdraw(50);

// I can still access this right? this underscore doesnt actually prevent me from accessing it
// console.log(wallet._balance); 
console.log(wallet.balance); 
console.log(wallet.transactions);
