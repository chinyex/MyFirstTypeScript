import { BankAccount } from "./BankAccount";

export class SavingsAccount extends BankAccount {
  constructor(
    customerId: number,
    customerName: string,
    accountNumber: string,
    balance: number,
  ) {
    super(customerId, customerName, accountNumber, balance);
  }

  withdraw(amount: number): void {
    if (amount > this.balance) {
      console.log("Insufficient balance.");
      return;
    }

    this.balance -= amount;
  }
}
