//This is default binding
// console.log(this);

//This will refer to objects that the function id accessed on.
const implicitBinding = {
  name: "mani",
  age: 22,
  viewDetails: function () {
    console.log(this.name, this.age);
  },
};
// implicitBinding.viewDetails();

// this keyword in callback refers to different objects based on type of function used.

const thisArrowDemo = () => {
  const _URL = "https://my-json-server.typicode.com/maniknr02/mockapi/users";
  var req = new XMLHttpRequest();
  req.open("GET", _URL);
  req.send();
  console.log("this inside Demo Function" + this);
  req.onreadystatechange = function () {
    console.log(this);
  };
};

//this in callback refers to window object as we are using an arrow function.

// const thisArrowDemo = () => {
//   const _URL = "https://my-json-server.typicode.com/maniknr02/mockapi/users";
//   var req = new XMLHttpRequest();
//   req.open("GET", _URL);
//   req.send();
//   console.log("this inside Demo Function" + this);
//   req.onreadystatechange = () => {
//     console.log(this);
//   };
// };

// thisArrowDemo();

const constructorExample = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

let consObj = new constructorExample("manikanta", "knr");
// console.log(consObj.firstName, consObj.lastName);

//This keyword by using call() and apply()

function add(name, age) {
  console.log(this);
  return this.name + " " + age;
}

const o = { name: "manikanta", age: 30 };

// The first parameter is the object to use as 'this'; subsequent
// parameters are used as arguments in the function call

// console.log(add("knr", 22));

// console.log(add.call(o, "knr", 22));

// console.log(add.apply(o, ["knr", 22]));

let newFun = add.bind(o);
// console.log(newFun("", 22));
