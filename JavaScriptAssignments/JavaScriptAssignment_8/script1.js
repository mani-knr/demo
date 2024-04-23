const Loan = function (name, amount) {
  this.name = name;
  this.amount = amount;
};

//Assigning a method typeOfLoan to the Loan() prototype
let loanPrototype = {
  typeOfLoan: function () {
    console.log(`Type of loan : ${this.name} Loan`);
    console.log(`Amount sanctioned : ${this.amount}`);
  },
  calculateInterest: function () {
    let interest = Math.round((this.roi * this.amount) / 100);
    console.log("Interest for " + this.amount + " : " + interest + " per year");
  },
  showPrototype: function () {
    console.log(this.name + " prototype :");
    console.log(Object.getPrototypeOf(this));
  },
};
Object.assign(Loan.prototype, loanPrototype);

let carLoanObj = {
  name: "Car Loan",
  amount: 500000,
  roi: 2.5,
};
//Assigning loan prototype to the carLoanObj
carLoanObj.__proto__ = Object.getPrototypeOf(new Loan());
carLoanObj.typeOfLoan();
carLoanObj.calculateInterest();
console.log("--------------------------------");
let personalLoanObj = {
  name: "Personal Loan",
  amount: 200000,
  roi: 2.5,
};
//Assigning loan prototype to the carLoanObj
personalLoanObj.__proto__ = new Loan().__proto__;
personalLoanObj.typeOfLoan();
personalLoanObj.calculateInterest();
console.log("===============================================================");
