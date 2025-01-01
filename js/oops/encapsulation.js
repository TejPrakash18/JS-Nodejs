class BankAccount {
    #balance;
    constructor(initialBalance){
        this.#balance = initialBalance;
    }

    set deposit(amount){
        this.#balance +=amount;
    }
    get getBalance(){
        return this.#balance;
    }
}

const account = new BankAccount(1000);

console.log(account.getBalance);
account.deposit = 1000;
console.log(account.getBalance);