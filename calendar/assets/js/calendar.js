// Your original calendar script

const daysTag = document.querySelector(".days"),
  currentDate = document.querySelector(".current-date"),
  prevNextIcon = document.querySelectorAll(".icons span");

// getting new date, current year, and month
let date = new Date(),
  currYear = date.getFullYear(),
  currMonth = date.getMonth();

// storing full name of all months in array
const months = [
  "January",
  "February",
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

// Function to fetch events from the JSON file
async function fetchEvents() {
  const response = await fetch("events.json");
  const events = await response.json();
  return events;
}

// Function to render the calendar
const renderCalendar = async () => {
  const events = await fetchEvents(); // Fetch events from the JSON file

  let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
  let liTag = "";

  for (let i = firstDayofMonth; i > 0; i--) {
    // creating li of previous month last days
    liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
  }

  for (let i = 1; i <= lastDateofMonth; i++) {
    // creating li of all days of current month
    let isToday =
      i === date.getDate() &&
      currMonth === new Date().getMonth() &&
      currYear === new Date().getFullYear()
        ? "active"
        : "";

    // Checking if the current day is a Sunday
    let dayOfWeek = new Date(currYear, currMonth, i).getDay();
    let isSunday = dayOfWeek === 0 ? "sunday" : ""; // If it's Sunday, add the "sunday" class

    // Check if there's an event on this date
    let event = events.find(
      (event) =>
        new Date(event.date).getFullYear() === currYear &&
        new Date(event.date).getMonth() === currMonth &&
        new Date(event.date).getDate() === i
    );

    let eventClass = event ? event.type : ""; // Assign event type as a class if there's an event

    liTag += `<li class="${isToday} ${isSunday} ${eventClass}">${i}</li>`;
  }

  for (let i = lastDayofMonth; i < 6; i++) {
    // creating li of next month first days
    liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
  }

  currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current month and year as currentDate text
  daysTag.innerHTML = liTag;

  colorSundays(); // Apply red color to Sundays
  styleEvents(); // Apply styles to events
};

// Function to color Sundays
const colorSundays = () => {
  const sundays = document.querySelectorAll(".sunday");
  sundays.forEach((sunday) => {
    sunday.style.color = "red"; // Apply red font color to Sundays
  });
};

// Function to style events based on their type
const styleEvents = () => {
  const events = document.querySelectorAll(".holiday, .meeting, .birthday");
  events.forEach((event) => {
    if (event.classList.contains("holiday")) {
      event.style.backgroundColor = "lightgreen";
    } else if (event.classList.contains("meeting")) {
      event.style.backgroundColor = "lightblue";
    } else if (event.classList.contains("birthday")) {
      event.style.backgroundColor = "lightcoral";
    }
  });
};

renderCalendar();

prevNextIcon.forEach((icon) => {
  // getting prev and next icons
  icon.addEventListener("click", () => {
    // adding click event on both icons
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
    if (currMonth < 0 || currMonth > 11) {
      date = new Date(currYear, currMonth, new Date().getDate());
      currYear = date.getFullYear(); // updating current year with new date year
      currMonth = date.getMonth(); // updating current month with new date month
    } else {
      date = new Date(); // pass the current date as date value
    }
    renderCalendar(); // calling renderCalendar function
  });
});
