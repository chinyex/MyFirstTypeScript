export interface IBankAccount {
  customerId: number;
  customerName: string;
  accountNumber: string;

  deposit(amount: number): void;
  withdraw(amount: number): void;
  checkBalance(): number;
  displayAccountInfo(): void;
  calculateInterest(): number;
}