import { IBankAccount } from "../interfaces/IBankAccount";

export class BankAccount implements IBankAccount {
  constructor(
    public customerId: number,
    public customerName: string,
    public accountNumber: string,
    protected balance: number
  ) {}

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): void {
    if (amount > this.balance) {
      console.log("Insufficient balance.");
      return;
    }

    this.balance -= amount;
  }

  checkBalance(): number {
    return this.balance;
  }

  displayAccountInfo(): void {
    console.log(`Customer ID: ${this.customerId}`);
    console.log(`Customer Name: ${this.customerName}`);
    console.log(`Account Number: ${this.accountNumber}`);
    console.log(`Balance: ₦${this.balance}`);
  }

  calculateInterest(): number {
    return this.balance * 0.05;
  }
}