import { BankAccount } from "./BankAccount";

export class PremiumAccount extends BankAccount {
  constructor(
    customerId: number,
    customerName: string,
    accountNumber: string,
    balance: number,
  ) {
    super(customerId, customerName, accountNumber, balance);
  }

  withdraw(amount: number): void {
    let processingFee = 0;

    if (amount > 500000) {
      processingFee = amount * 0.02;
    }

    const totalAmount = amount + processingFee;

    if (totalAmount > this.balance) {
      console.log("Insufficient balance.");
      return;
    }

    this.balance -= totalAmount;
  }
}
