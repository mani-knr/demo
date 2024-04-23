//This file is used to load the data to the localStorage
var data = {
  "abi@gmail.com": {
    firstName: "Abhishek",
    lastName: "Verma",
    mobile: "9012345678",
    age: 25,
    city: "Delhi",
  },
  "babu@gmail.com": {
    firstName: "Babu",
    lastName: "Annam",
    mobile: "1012345678",
    age: 20,
    city: "Hyderabad",
  },
  "chitra@gmail.com": {
    firstName: "Chitra",
    lastName: "Kumar",
    mobile: "2012345678",
    age: 22,
    city: "Bangallore",
  },
  "deepa@gmail.com": {
    firstName: "Deepa",
    lastName: "Verma",
    mobile: "3012345678",
    age: 27,
    city: "Chennai",
  },
  "superman@gmail.com": {
    firstName: "henry",
    lastName: "Cavill",
    mobile: "3012345678",
    age: 35,
    city: "los-Angeles",
  },
  "chrisevans@gmail.com": {
    firstName: "Chris",
    lastName: "Evans",
    mobile: "3264613641",
    age: 40,
    city: "Newyork",
  },
  "hemsworth@gmail.com": {
    firstName: "Chris",
    lastName: "Hemsworth",
    mobile: "3012345678",
    age: 27,
    city: "London",
  },
  "brucehulk@gmail.com": {
    firstName: "Mark",
    lastName: "Ruffalo",
    mobile: "46363465321",
    age: 48,
    city: "California",
  },
  "invincible@gmail.com": {
    firstName: "Home",
    lastName: "Lander",
    mobile: "6549864163",
    age: 36,
    city: "Nevada",
  },
  "brucehulk@gmail.com": {
    firstName: "Mark",
    lastName: "Ruffalo",
    mobile: "4636346532",
    age: 48,
    city: "California",
  },
  "blackPanther@gmail.com": {
    firstName: "Chadwick",
    lastName: "Boseman",
    mobile: "953163215",
    age: 40,
    city: "wakanda",
  },
};

localStorage.setItem("students", JSON.stringify(data));
// localStorage.clear();
