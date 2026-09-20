# BankAccount Class

A simple JavaScript class that simulates basic banking operations.  
It supports deposits, withdrawals, balance checking, and transaction history tracking.

---

## Features
- **Deposit funds** with validation (amount must be greater than zero).
- **Withdraw funds** with validation (amount must be positive and not exceed balance).
- **Check balance** at any time.
- **Track transactions** (both deposits and withdrawals).
- **List deposits and withdrawals** separately.
- **View all transactions** in a formatted history.

---

## Usage

### 1. Create an Account
```js
const myAccount = new BankAccount();
