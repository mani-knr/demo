let months = [
  "January",
  "Febrauary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const selectedMonth = document.querySelector("#month-select");
const selectedYear = document.querySelector("#year-select");
const displayedMonth = document.querySelector("#month");
const displayedYear = document.querySelector("#year");
const calendarBody = document.querySelector("#calendar-body");
const monthSelect = document.querySelector("#month-select");
const yearSelect = document.querySelector("#year-select");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

var currDate = new Date();
let fillMonth = () => {
  let template = "";
  for (let month of months) {
    template += `<option value=${month} >${month}</option>`;
  }
  selectedMonth.innerHTML = template;
  selectedMonth.value = months[currDate.getMonth()];
};
let fillYear = () => {
  let template = "";
  for (let year = 1950; year <= 2050; year++) {
    template += `<option value=${year} >${year}</option>`;
  }
  selectedYear.innerHTML = template;
  selectedYear.value = currDate.getFullYear();
};
const fillHeading = (month, year) => {
  displayedMonth.innerHTML = months[month];
  displayedYear.innerHTML = year;
};
const fillCells = (startDay, template, numOfDays, curr) => {
  let i;
  for (i = 1; i <= numOfDays; i++) {
    if ((startDay + i) % 7 === 1) {
      template += `<tr><td class="holiday">${i}</td>
            `;
    } else if (startDay + i === 0) {
      template += `<td>${i}</td></tr>`;
    } else {
      if (i === curr) template += `<td class="high">${i}</td>`;
      else template += `<td >${i}</td>`;
    }
  }
  i--;
  while ((startDay + i) % 7 !== 0) {
    template += `<td></td>`;
    i++;
  }
  return template + "</tr>";
};
const fillCalendarBody = (startDay, numOfDays, curr) => {
  let table = `<table>
  <tr>
      <th class="holiday" >Sun</th>
      <th>Mon</th>
      <th>Tue</th>
      <th>Wed</th>
      <th>Thu</th>
      <th>Fri</th>
      <th>Sat</th>
  </tr>`;
  let template = `<tr>`;
  for (let i = 0; i < startDay; i++) {
    template += `<td></td>`;
  }
  template = fillCells(startDay, template, numOfDays, curr);
  calendarBody.innerHTML = table + template + "</table>";
};
const isLeapYear = (year) => {
  if (year % 400 == 0) return true;
  if (year % 100 == 0) return false;
  if (year % 4 == 0) return true;
  return false;
};

const findNumOfDays = (selMonth) => {
  if (selMonth.getMonth() === 1) {
    if (isLeapYear(selMonth.getFullYear())) return 29;
    return 28;
  }
  if (selMonth.getMonth() < 7) {
    if (selMonth.getMonth() % 2 === 0) return 31;
    else return 30;
  } else {
    if (selMonth.getMonth() % 2 === 1) return 31;
    else return 30;
  }
};
fillMonth();
fillYear();

const printCalendar = (selmon, selyear) => {
  if (selmon == currDate.getMonth() + 1 && selyear == currDate.getFullYear()) {
    var curr = currDate.getDate();
  }
  let selMonth = new Date(`${selmon}-01-${selyear}`);
  let numOfDays = findNumOfDays(selMonth);
  let startDay = selMonth.getDay();
  fillCalendarBody(startDay, numOfDays, curr);
  fillHeading(parseInt(selmon) - 1, selyear);
};
printCalendar(currDate.getMonth() + 1, currDate.getFullYear());
const findMonth = () => {
  let i;
  for (i = 0; i < months.length; i++) {
    if (months[i] === selectedMonth.value) {
      i = i < 10 ? "0" + (i + 1) : i + 1;
      return i;
    }
  }
};

selectedMonth.addEventListener("change", () => {
  printCalendar(findMonth(), selectedYear.value);
});
selectedYear.addEventListener("change", () => {
  printCalendar(findMonth(), selectedYear.value);
});
nextBtn.addEventListener("click", () => {
  let currMonth = parseInt(findMonth(selectedMonth.value));
  if (currMonth < 12) {
    selectedMonth.value = months[currMonth];
  } else {
    selectedMonth.value = months[0];
    selectedYear.value = parseInt(selectedYear.value) + 1;
  }
  printCalendar(findMonth(), selectedYear.value);
});
prevBtn.addEventListener("click", () => {
  let currMonth = parseInt(findMonth(selectedMonth.value));
  if (currMonth > 1) {
    selectedMonth.value = months[currMonth - 2];
  } else {
    selectedMonth.value = months[11];
    selectedYear.value = parseInt(selectedYear.value) - 1;
  }
  printCalendar(findMonth(), selectedYear.value);
});
