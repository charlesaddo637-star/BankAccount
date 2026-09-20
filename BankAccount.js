class BankAccount{
  constructor(){
    this.balance=0;
    this.transactions=[];
  }
  deposit(amount){
    if (amount>0){
      this.transactions.push({type:"deposit",amount:amount})
      this.balance+=amount;
      return `Successfully deposited $${amount}. New balance: $${this.balance}`
    }else {
      return "Deposit amount must be greater than zero."
    }
  }
  withdraw(amount){
    if (amount>0 && amount<= this.balance){
      this.transactions.push({type:"withdraw",amount:amount})
      this.balance-=amount;
      return `Successfully withdrew $${amount}. New balance: $${this.balance}`
    }else {
      return "Insufficient balance or invalid amount."
    }
  }
  checkBalance(){
    return `Current balance: $${this.balance}`;
  }
  listAllDeposits(){
    const depositAmounts=this.transactions.filter(transc=>
      transc.type==="deposit"
    ).map(transc=>transc.amount);
    return `Deposits: ${depositAmounts}`;
  }
  listAllWithdrawals(){
    const withdrawalAmounts=this.transactions.filter(transc=>
      transc.type==="withdraw"
    ).map(transc=>transc.amount);
    return `Withdrawals: ${withdrawalAmounts}`
  }
  listTransactions(){
    return this.transactions.map(t=>`${t.type}:${t.amount}`).join("\n");
  }
}
const myAccount = new BankAccount();
myAccount.deposit(1000);
myAccount.withdraw(500);
myAccount.deposit(4000);
myAccount.withdraw(300);
myAccount.withdraw(1200);
console.log(myAccount.listAllDeposits())
console.log(myAccount.listTransactions())
