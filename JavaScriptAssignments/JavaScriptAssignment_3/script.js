let timer = {
  days: 6,
  hours: 7,
  minutes: 56,
  seconds: 1,
};

const minutesEle = document.querySelector("#minutes");
const hoursEle = document.querySelector("#hours");
const secondsEle = document.querySelector("#seconds");
const daysEle = document.querySelector("#days");

const fillTheContent = () => {
  //   const { timer.days, timer.hours, timer.minutes, timer.seconds } = timer;
  minutesEle.innerHTML =
    timer.minutes < 10 ? "0" + timer.minutes : timer.minutes;
  hoursEle.innerHTML = timer.hours < 10 ? "0" + timer.hours : timer.hours;
  daysEle.innerHTML = timer.days < 10 ? "0" + timer.days : timer.days;
  secondsEle.innerHTML =
    timer.seconds < 10 ? "0" + timer.seconds : timer.seconds;
};
let startflag = false;
const startTheTimer = () => {
  //   let { timer.days, timer.hours, timer.minutes, timer.seconds } = timer;
  runTimer = setInterval(() => {
    startflag = true;
    if (
      !(
        timer.days === 0 &&
        timer.hours === 0 &&
        timer.minutes === 0 &&
        timer.seconds === 0
      )
    ) {
      if (timer.seconds === 0) {
        timer.seconds = 60;
        timer.minutes -= 1;
        minutesEle.innerHTML =
          timer.minutes < 10 ? "0" + timer.minutes : timer.minutes;
      }

      if (timer.minutes < 0) {
        timer.hours -= 1;
        timer.minutes = 59;
        minutesEle.innerHTML =
          timer.minutes < 10 ? "0" + timer.minutes : timer.minutes;
        hoursEle.innerHTML = timer.hours < 10 ? "0" + timer.hours : timer.hours;
      }
      if (timer.hours < 0) {
        timer.days -= 1;
        timer.hours = 23;
        minutesEle.innerHTML =
          timer.minutes < 10 ? "0" + timer.minutes : timer.minutes;
        hoursEle.innerHTML = timer.hours < 10 ? "0" + timer.hours : timer.hours;
        daysEle.innerHTML = timer.days < 10 ? "0" + timer.days : timer.days;
      }
      timer.seconds -= 1;
      secondsEle.innerHTML =
        timer.seconds < 10 ? "0" + timer.seconds : timer.seconds;
    } else {
      clearInterval(runTimer);
      startflag = false;
      // alert("timer completed");
    }
  }, 1000);
};

const setBtn = document.querySelector(".set");
const startBtn = document.querySelector(".start");
const resetBtn = document.querySelector(".reset");
const pauseBtn = document.querySelector(".pause");
resetBtn.addEventListener("click", () => {
  timer.days = 0;
  timer.hours = 0;
  timer.minutes = 0;
  timer.seconds = 0;
  fillTheContent();
});

const inputs = document.querySelectorAll("input");
const getData = () => {
  timer.days =
    (inputs[0].value === "" ? 0 : parseInt(inputs[0].value)) +
    Math.floor(inputs[1].value / 24);
  timer.hours = (inputs[1].value % 24) + Math.floor(inputs[2].value / 60);
  timer.minutes = (inputs[2].value % 60) + Math.floor(inputs[3].value / 60);
  timer.seconds = inputs[3].value % 60;
  console.log(typeof inputs[0].value);
  return true;
};
const cleardata = () => {
  for (input of inputs) {
    input.value = "";
  }
};

let flag = false;
setBtn.addEventListener("click", () => {
  flag = getData();
  fillTheContent();
  cleardata();
});
startBtn.addEventListener("click", () => {
  if (flag && !startflag) startTheTimer();
});
pauseBtn.addEventListener("click", () => {
  clearInterval(runTimer);
  startflag = false;
});
