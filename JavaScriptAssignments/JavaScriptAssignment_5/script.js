"use strict";
let users = [
  {
    name: "Naruto Uzumaki",
    presence: 1,
    profilePicture: "./assets/naruto_uzumaki.jpg",
    statusMessage: "we bacame what we want",
    userId: "USR00001",
  },
  {
    name: "Nara Shikamaru",
    presence: 2,
    profilePicture: "./assets/shikamaru_nara.jpg",
    statusMessage: "What a Drag!",
    userId: "USR00002",
  },
  {
    name: "Uchiha Sasuke",
    presence: 3,
    profilePicture: "./assets/sasuke.jpg",
    statusMessage: "Hokage in the Dark",
    userId: "USR00003",
  },
  {
    name: "Uchiha Itachi",
    presence: 1,
    profilePicture: "./assets/itachi.jpg",
    statusMessage: "How much your Sharingan can see!",
    userId: "USR00004",
  },
  {
    name: "Uchiha Madara",
    presence: 4,
    profilePicture: "./assets/uchiha_madara.jpg",
    statusMessage: "This is not power of your Creation!",
    userId: "USR00005",
  },
];
if (localStorage.getItem("users") === null) {
  localStorage.setItem("users", JSON.stringify(users));
}

const NO_PROFILE =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAP1BMVEWzs7P///+vr6/k5OTs7Oy2tratra3X19fc3NzR0dH8/Pz4+Pjx8fG4uLi9vb3IyMjBwcHFxcXn5+fu7u7Nzc2cgkJPAAAESElEQVR4nO2dC7qjIAxGJdb323b/a53a3rmjrbQCUYLznxV4PpAkEDSKAAAAAAAAAAAAAAAAAAAAAADgUOiB76fYkzy+kxVtc1pN9UNZ50NySkk1oxy76HSSVKslcX8yR4rVK5fiXAPZvRneZ2t2Jsd2xXByPM/SmlSrikoVJ1GkqNQYqnoI35Govb2upYt1NfDXkai4fNB70AWsSG2snZ8zLk2gjtSOG/Sew5j6flgb0nzL+P0whjeKtB4DtZShzVTKzQTvimEtOM2n+KAjC0eRel0O80UxlPWGeiu/SdH3o2/DXlCpPIiJ6iAYxruorSO2IT8Tp69p6Bca3wZfoMxRUF2FD2JrkKlpkB356eosqFTi2+ITTuvoXySHjJRjCFUlOLUxrCd0dL49tJgXFOtcxE5Tcgv2v5Ri1xqmSarUzbeJjhuXodQ9jZUDGEtqqYYssWKilJqcMi00d1rfKhrYBFXhW2WdhM9QaCHMaBjD0A8whOEMoSUiDA04f7Q4f8SHoSdgCEP5hozVk9T9RL4K+PyGvW8VDeffxTi9ofPxr3zDzY16gRqSVSNUSIbOJ/gzJLYO8W3pP5DXx8d1dPgPcUGfW1BVvo2W8A+htLyG6/R3jqxj0pRfUNhuFAxtGHxLLdjjPZR1Dswc7yeERQu+NoxfxG3ssxvKCoc7TFNpk5Sp73KGvNuljAX+hMSOmoHVUN4QcvSwzxDa9sVoKG0h/WHtuwJ2CG1UeP/8hS2lbxMtDZOhrKpiDhUsgrXgXn2eEkPoMvOE45BUXMq9gCE9rQRmMwuc56m4reAXyLVQlH45L4pSxwzc9/NvIHG6gSh7mXnilIFXAQi6Xbu4BWHoUO6PgrOZOdbHNKXMo98VbIsMuRn3G3Y7GkIL+1XskjfRGfcbFslbCKFwhvl10pDm6IR5Mez7ic0xbJAKJNbPMav3A3sJn/QGKfjV98NaYbB9WoY4giYxUe4XBj5C24dQ/peT1jAJF2FUha+kJtl3mCupgWCQ89Qw95Z45PsNw/0oeY0JXzAvnwKL+WRRAseB7NE8sBEMahTJ8rg7GMXEuiO6akMIGmnncvpUiH8ZqXPsVqhFb0eRs99ELPZHNBQVPN0m5XVI5UlS1HN27tVZK+rnHhQNm34QYCjZJyIsiZIh3qGNfaK6ZF2TetWkNCr4blVqNMesj/z80oyiNttp8N6o86I99lcm059V+F+9z1TjYZb3hSVj+36goWXc7R1I7gvL4YP3Qjzs91ISNbmnwVuS7ZL2UNpnfHe1HSnzgTtFp6Y4at3cyJX193t047+45U7OtbLe1xZhw/cLT++G0T+NjqZ2/8GQ7R9jDsN5GHmv+uyB413aPa7Z8+La1896l2kXXD9QD0P/wBCGMPQPDGEIQ//AEIYw9A8MYQhD/8AQhvL32pwvt3djLBv3jX2SjqsgAAAAAAAAAAAAAAAAAAAAAOD/4Q9tQkhDbo2dwAAAAABJRU5ErkJggg==";
let statusColor = ["green", "red", "yellow", "grey"];
users = JSON.parse(localStorage.getItem("users"));
const bodyEle = document.querySelector(".container");
const getId = (id) => {
  for (let i = 0; i < users.length; i++) {
    if (users[i].userId === id) {
      return i;
    }
  }
  return -1;
};
const renderData = () => {
  let template = "";
  let users = JSON.parse(localStorage.getItem("users"));
  for (let obj of users) {
    template += `<div class="card m-3">
    <div class=" card-body d-flex" style="justify-content:space-between; " 
     >
  <div class="user">
  <img style="border-color:${statusColor[obj.presence - 1]}" src=${
      obj.profilePicture
    } alt="failed to load" />
  <div>
    <p>${obj.name}</p>
    <span>${obj.statusMessage}</span>
  </div>
  </div>
  <div>
  <div class="dropdown">
  <button class="btn  " type="button"  data-bs-toggle="dropdown" aria-expanded="false">
  <i class="bi bi-three-dots-vertical"></i>
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <li><button class="dropdown-item" id=${
      obj.userId
    } onclick="deleteUser(this.id)" type="button">Delete</button></li>
    <li><button class="dropdown-item"  type="button" id="+${
      obj.userId
    }" onclick="updateStatus(this.id)" >Update Status</button></li>
    
    </ul>
</div>
  
  </div>
</div></div>`;
  }
  bodyEle.innerHTML = template;
};
renderData();
let updatePresence = ({ userId, presence }) => {
  if (getId(userId) !== -1) users[getId(userId)].presence = presence;
  else alert("user not found");
  renderData();
};
let updateStatusMessage = ({ userId, statusMessage }) => {
  if (getId(id) !== -1) users[getId(userId)].statusMessage = statusMessage;
  else alert("user not found");
  renderData();
};
// let addUser = (obj) => {
//   users.push(obj);
//   renderData();
// };
let removeUser = (userId) => {
  users.splice(getId(userId), 1);
  localStorage.setItem("users", JSON.stringify(users));

  renderData();
};

const nameInput = document.querySelector("#name");
const profileInput = document.querySelector("#profile");
const statusMessageInput = document.querySelector("#statusMessage");
const presenceInput = document.querySelector("#presence");
const formEle = document.querySelector("#addUser");
formEle.addEventListener("submit", (e) => {
  e.preventDefault();
  let dummyObj = {
    userId: `USR0000${localStorage.getItem("referId")}`,
    name: nameInput.value,
    profilePicture: profileInput.value === "" ? NO_PROFILE : profileInput.value,
    statusMessage: statusMessageInput.value,
    presence: parseInt(presenceInput.value),
  };
  users.unshift(dummyObj);
  localStorage.setItem("users", JSON.stringify(users));
  let dummyId = parseInt(localStorage.getItem("referId"));
  localStorage.setItem("referId", `${dummyId + 1}`);
  renderData();
  document.querySelector("#close").click();
});

const findIndex = (id) => {
  for (let i = 0; i < users.length; i++) {
    if (users[i].userId === id) {
      return i;
    }
  }
  return -1;
};
var updatableId;
const deleteUser = (id) => {
  users.splice(findIndex(id), 1);
  localStorage.setItem("users", JSON.stringify(users));
  renderData();
};
const updateStatus = (id) => {
  updatableId = findIndex(id.substring(id.indexOf("U")));
  document.querySelector("#updateBtn").click();
};
const upNameInput = document.querySelector("#upname");
const upProfileInput = document.querySelector("#upprofile");
const upStatusMessageInput = document.querySelector("#upstatusMessage");
const upPresenceInput = document.querySelector("#uppresence");
const updateFormBtn = document.querySelector("#updateData");
updateFormBtn.addEventListener("submit", (e) => {
  e.preventDefault();
  if (upNameInput.value !== "") users[updatableId].name = upNameInput.value;
  if (upProfileInput.value !== "")
    users[updatableId].profilePicture = upProfileInput.value;
  if (upStatusMessageInput.value !== "")
    users[updatableId].statusMessage = upStatusMessageInput.value;
  if (upPresenceInput.value !== 0)
    users[updatableId].presence = parseInt(upPresenceInput.value);
  console.log(users[updatableId]);
  localStorage.setItem("users", JSON.stringify(users));
  renderData();
  document.querySelector("#upClose").click();
});
