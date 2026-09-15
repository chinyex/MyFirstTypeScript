import { BankAccount } from "./BankAccount";

export class BusinessAccount extends BankAccount {
  constructor(
    customerId: number,
    customerName: string,
    accountNumber: string,
    balance: number,
  ) {
    super(customerId, customerName, accountNumber, balance);
  }

  withdraw(amount: number): void {
    const transactionFee = 500;
    const totalAmount = amount + transactionFee;

    if (totalAmount > this.balance) {
      console.log("Insufficient balance.");
      return;
    }

    this.balance -= totalAmount;
  }
}
