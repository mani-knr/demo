const Card = function (name, amount) {
  this.name = name;
  this.amount = amount;
};

//Assigning a method typeOfCard to the Card() prototype
let CardPrototype = {
  typeOfCard: function () {
    console.log(`Type of Card : ${this.name} Card`);
    console.log(`${this.name} Card amount : ${this.amount}`);
  },
  transaction: function (amount) {
    if (this.name === "Credit") {
      this.amount += amount;
      console.log("amount credited : " + amount);
      console.log(`remainig amount : ${this.amount}`);
    } else {
      this.amount -= amount;
      console.log("amount debited : " + amount);
      console.log(`remainig amount : ${this.amount}`);
    }
  },
};
Object.assign(Card.prototype, CardPrototype);

let creditCardObj = {
  name: "Credit",
  amount: 5000,
};
//Assigning Card prototype to the carCardObj
creditCardObj.__proto__ = Object.getPrototypeOf(new Card());
creditCardObj.typeOfCard();
//Making a transaction on credit card
creditCardObj.transaction(500);

console.log("--------------------------------");
let debitCardObj = {
  name: "Debit ",
  amount: 2000,
};
//Assigning Card prototype to the carCardObj
debitCardObj.__proto__ = new Card().__proto__;
debitCardObj.typeOfCard();
//Making a transaction on debit card
debitCardObj.transaction(800);
