class Wallet{
    #balance = 0;
    #transactions = [];

    deposit(amount){
        this.#processDeposit(amount);
        this.#balance += amount;
    }

    #processDeposit(amount){
        console.log(`Depositing ${amount}`);
        this.#transactions.push({
            type: 'Deposit',
            amount
        });
    }

    withdraw(amount){
        if(amount > this.#balance){
            console.log('Not enough funds');
            return;
        }
        this.#processWithdraw(amount);
        this.#balance -= amount;
    }

    #processWithdraw(amount){
        console.log(`Withdrawing ${amount}`);
        this.#transactions.push({
            type: 'Withdraw',
            amount
        });
    }

    get balance(){
        return this.#balance;
    }

    get transactions(){
        return this.#transactions;
    }
}

const wallet = new Wallet();
// console.log(wallet.#balance); // ^ So number sign balance and even in VS code, it says property is not accessible outside class because it's a private identifier.
wallet.deposit(500);
wallet.withdraw(100);
console.log(wallet.balance);

//  JavaScript didnt have a way to create private entities in classes and its mean private cant be accessed outside of the class.There was _ (underscore) to let the developer know that is private property but there was no way to prevent this from accessing outside.

// Class fields or private fields -> we can actually use isntead of an underscore, we can use a number sign and it works a little bit different, we can do is actually not put them in constructor we can actually put them right in the class