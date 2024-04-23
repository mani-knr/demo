"use strict";
const formEle = document.querySelector("form");
const nameEle = document.querySelector("#name");
const ageEle = document.querySelector("#age");
const cityEle = document.querySelector("#city");
const viewBtn = document.querySelector("#viewusers");
const addBtn = document.querySelector("#adduser");
const displayEle = document.querySelector("#show");

const _URL = "https://64046eb380d9c5c7bac7a75c.mockapi.io/users";

let getDataFromApi = () => {
  let req = new XMLHttpRequest();
  req.open("GET", _URL);
  req.setRequestHeader("Content-type", "application/json");
  req.onreadystatechange = () => {
    if (req.readyState == 4 && req.status == 200) {
      display(req.responseText);
    }
  };
  req.send();
};
let updateUser = (id) => {
  let inputs = document.querySelectorAll(`#div-${id} input`);
  let newName = inputs[1].value;
  let newAge = inputs[2].value;
  let newCity = inputs[3].value;
  let upreq = new XMLHttpRequest();
  upreq.open("PUT", `${_URL}/${id}`);
  upreq.setRequestHeader("Content-type", "application/json");
  upreq.onreadystatechange = () => {
    if (upreq.readyState == 4 && upreq.status == 200) {
      let inputs = document.querySelectorAll(`#div-${id} input`);
      for (let i = 1; i < inputs.length; i++) {
        inputs[i].setAttribute("disabled", "true");
        inputs[i].style.backgroundColor = "white";
      }
      document.querySelector(`.save-${id}`).style.display = "none";
    }
  };
  let newData = { userName: newName, Age: newAge, City: newCity };
  // console.log(id, newData);
  upreq.send(JSON.stringify(newData));
};
let addUser = () => {
  let name = nameEle.value;
  let age = ageEle.value;
  let city = cityEle.value;
  document.querySelector("#reset").click();
  let newObj = {
    userName: name,
    Age: age,
    City: city,
  };
  // console.log(newObj);
  let addreq = new XMLHttpRequest();
  addreq.open("POST", _URL);
  addreq.setRequestHeader("Content-type", "application/json");

  addreq.onreadystatechange = () => {
    if (addreq.status == 201 && addreq.readyState == 4) {
      alert("User added successfully");
    }
  };
  addreq.send(JSON.stringify(newObj));
};
let editUser = (id) => {
  let inputs = document.querySelectorAll(`#div-${id} input`);
  for (let i = 1; i < inputs.length; i++) {
    inputs[i].removeAttribute("disabled");
    inputs[i].style.backgroundColor = "yellow";
  }
  document.querySelector(`.save-${id}`).style.display = "block";
};
let deleteFromList = (id) => {
  let delreq = new XMLHttpRequest();
  delreq.open("DELETE", `${_URL}/${id}`);
  delreq.setRequestHeader("Content-type", "application/json");
  delreq.send();
  delreq.onreadystatechange = () => {
    if (delreq.status == 200 && delreq.readyState == 4) {
      document.getElementById("div-" + id).style.display = "none";
      document.querySelector(".btn-danger").click();
      getDataFromApi();
    }
  };
};

let deletableId;

let deleteUser = (id, name) => {
  document.querySelector("#launchModal").click();
  document.querySelector(".mbody").innerHTML = `<h2>${name}</h2>`;
  deletableId = id;
};

let display = (users) => {
  users = JSON.parse(users);
  // console.log(users);
  let template = ` <div id="heading" ><input type="text" value="Id" disabled/><input type="text" value="Name" disabled/><input type="text" value="Age" disabled/><input type="text" value="City" disabled/><span></span></div>`;
  for (let i = 0; i < users.length; i++) {
    template += `<div id="div-${users[i].id}" ><input type="text" value="${
      i + 1
    }" disabled/><input type="text" value="${
      users[i].userName
    }" disabled/><input type="number" value="${
      users[i].Age
    }" disabled/><input type="text" value="${
      users[i].City
    }" disabled/><span><button class="save save-${
      users[i].id
    }" onclick="updateUser(${
      users[i].id
    })" ><i class="bi bi-file-earmark-post"></i></button><button onclick="editUser(${
      users[i].id
    })" ><i class="bi bi-pencil-square"></i></button><button onclick="deleteUser(${
      users[i].id
    },'${
      users[i].userName
    }')" ><i class="bi bi-trash"></i></button></span></div>`;
  }
  displayEle.innerHTML = template;
};

formEle.addEventListener("submit", (e) => {
  e.preventDefault();
  formEle.style.display = "none";
  addUser();
});

addBtn.addEventListener("click", () => {
  displayEle.style.display = "none";
  formEle.style.display = "block";
});

viewBtn.addEventListener("click", () => {
  getDataFromApi();
  formEle.style.display = "none";
  displayEle.style.display = "block";
});
document.querySelector(".btn-success").addEventListener("click", () => {
  deleteFromList(deletableId);
});
