const loadData = (students) => {
  let displayData = `<div class="heading" ><span>Full Name</span><span>Age</span><span>Mobile</span><span>Email</span><span>City</span></div>`;
  for (const [key, value] of Object.entries(students)) {
    let entry = `<div><span>${value.firstName} ${value.lastName}</span><span>${value.age}</span><span>${value.mobile}</span><span>${key}</span><span>${value.city}</span></div>`;
    displayData += entry;
  }
  document.querySelector("body").innerHTML = displayData;
};
if (!(localStorage.getItem("students") === null)) {
  let students = localStorage.getItem("students");
  students = JSON.parse(students);
  loadData(students);
} else {
  alert("Students Data not found");
}
let colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "pink",
  "skyblue",
  "aliceblue",
  "grey",
  "orange",
  "coral",
];
let flag = false;
const rows = document.querySelectorAll("div");
for (let row of rows) {
  row.style.backgroundColor = flag ? "pink" : "aliceblue";
  flag = !flag;
}
