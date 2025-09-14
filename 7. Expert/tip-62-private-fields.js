"use strict";

// Private class fields
class BankAccount {
  #balance = 0; // Private field

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  get balance() {
    return this.#balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  #validateWithdraw(amount) {
    // Private method
    return this.#balance >= amount;
  }

  withdraw(amount) {
    if (this.#validateWithdraw(amount)) {
      this.#balance -= amount;
      return true;
    }
    return false;
  }
}

const account = new BankAccount(100);
console.log(account.balance); // ✅ 100
// console.log(account.#balance); // ❌ SyntaxError: Private field
