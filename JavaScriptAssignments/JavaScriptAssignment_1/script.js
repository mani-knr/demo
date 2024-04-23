const buttonEle = document.querySelector("form");
const resetEle = document.querySelector("#reset");
buttonEle.addEventListener("submit", (e) => {
  e.preventDefault();
  // alert("Hi");
  const jobId = document.getElementById("jobId").value;
  const lastName = document.getElementById("lastName").value;
  const firstName = document.getElementById("firstName").value;
  const email = document.getElementById("email").value;
  const pinZip = document.getElementById("pinZip").value;
  const phone = document.getElementById("phone").value;

  const jobIdExp = /^[0-9]{6}$/;
  const NameExp = /^[A-z]{3,}/;
  const emailExp = /^[A-z 0-9 . _ -]+@[A-z]+\.[a-z]{2,}$/;
  const phoneExp = /^[6789]{1}[0-9]{9}$/;
  const pinZipExp = /^[1-9]{1}[0-9]{5}$/;
  let incorrectFields = "";
  if (!jobIdExp.test(jobId)) {
    incorrectFields += " Job Id,";
  }
  if (!NameExp.test(firstName)) {
    incorrectFields += "First Name,";
  }
  // if (!NameExp.test(lastName)) {
  //   incorrectFields += "Last Name,";
  // }
  if (!emailExp.test(email)) {
    incorrectFields += " Email,";
  }
  if (!phoneExp.test(phone)) {
    incorrectFields += " Phone Num,";
  }
  if (!pinZipExp.test(pinZip)) {
    incorrectFields += " Pincode/Zip";
  }
  if (incorrectFields !== "") {
    incorrectFields = "Incorrect" + incorrectFields;
    alert(incorrectFields);
  } else {
    alert("form Submitted successfully 😁");
    resetEle.click();
  }
});
