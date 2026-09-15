import { SavingsAccount } from "./models/SavingsAccount";
import { BusinessAccount } from "./models/BusinessAccount";
import { PremiumAccount } from "./models/PremiumAccount";

const savings = new SavingsAccount(1, "Chinenye", "SA001", 100000);

const business = new BusinessAccount(2, "Chinenye", "BA001", 100000);

const premium = new PremiumAccount(3, "Chinenye", "PA001", 1000000);

savings.deposit(20000);
savings.withdraw(10000);

business.deposit(20000);
business.withdraw(10000);

premium.deposit(20000);
premium.withdraw(600000);

console.log("===== SAVINGS ACCOUNT =====");
savings.displayAccountInfo();
console.log("Balance:", savings.checkBalance());

console.log("\n===== BUSINESS ACCOUNT =====");
business.displayAccountInfo();
console.log("Balance:", business.checkBalance());

console.log("\n===== PREMIUM ACCOUNT =====");
premium.displayAccountInfo();
console.log("Balance:", premium.checkBalance());

console.log("\n===== INTEREST =====");
console.log("Savings Interest:", savings.calculateInterest());
console.log("Business Interest:", business.calculateInterest());
console.log("Premium Interest:", premium.calculateInterest());

