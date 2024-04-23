const buttonEle = document.querySelector("#toggle-btn");
const styleEle = document.querySelector("#style");
const footEle = document.querySelector("#foot");
console.log(styleEle);
buttonEle.addEventListener("click", () => {
  const currStyle = styleEle.href;
  if (currStyle.includes("lightstyles")) {
    styleEle.setAttribute("href", "./darkstyles.css");
    footEle.setAttribute("src", "./assets/dark.svg");
  } else {
    styleEle.setAttribute("href", "./lightstyles.css");
    footEle.setAttribute("src", "./assets/light.svg");
  }
});
