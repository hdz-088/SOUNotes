const cal = [
  { date: "2024-09-05", type: "assignment" },
  { date: "2024-09-06", type: "assignment" },
  { date: "2024-09-07", type: "holiday" },
  { date: "2024-09-08", type: "holiday" },
  { date: "2024-09-09", type: "assignment" },
  { date: "2024-09-10", type: "assignment" },
  { date: "2024-09-11", type: "assignment" },
  { date: "2024-09-12", type: "assignment" },
  { date: "2024-09-23", type: "exams" },
  { date: "2024-09-24", type: "exams" },
  { date: "2024-09-25", type: "exams" },
  { date: "2024-09-26", type: "exams" },
  { date: "2024-09-27", type: "exams" },
  { date: "2024-09-28", type: "exams" },
  { date: "2024-09-29", type: "holiday" },
  { date: "2024-09-30", type: "exams" },
  { date: "2024-10-01", type: "exams" },
  { date: "2024-10-02", type: "holiday" },
  { date: "2024-10-05", type: "result" },
  { date: "2024-10-08", type: "" },
  { date: "2024-10-09", type: "" },
  { date: "2024-10-14", type: "exams" },
  { date: "2024-10-15", type: "exams" },
  { date: "2024-10-16", type: "exams" },
  { date: "2024-10-17", type: "exams" },
  { date: "2024-10-18", type: "exams" },
  { date: "2024-10-19", type: "exams" },
  { date: "2024-10-20", type: "holiday" },
  { date: "2024-10-21", type: "exams" },
  { date: "2024-10-24", type: "result" },
  { date: "2024-10-26", type: "term" },
  { date: "2024-10-29", type: "holiday" },
  { date: "2024-10-30", type: "holiday" },
  { date: "2024-10-31", type: "holiday" },
  { date: "2024-11-01", type: "holiday" },
  { date: "2024-11-02", type: "holiday" },
  { date: "2024-11-03", type: "holiday" },
  { date: "2024-11-04", type: "holiday" },
  { date: "2024-11-05", type: "holiday" },
  { date: "2024-11-06", type: "holiday" },
  { date: "2024-11-09", type: "exams" },
  { date: "2024-11-10", type: "holiday" },
  { date: "2024-11-11", type: "exams" },
  { date: "2024-11-12", type: "exams" },
  { date: "2024-11-13", type: "exams" },
  { date: "2024-11-14", type: "exams" },
  { date: "2024-11-15", type: "exams" },
  { date: "2024-11-16", type: "exams" },
  { date: "2024-11-17", type: "holiday" },
  { date: "2024-11-18", type: "exams" },
  { date: "2024-11-19", type: "exams" },
  { date: "2024-11-20", type: "exams" },
  { date: "2024-11-21", type: "exams" },
  { date: "2024-11-22", type: "exams" },
  { date: "2024-11-23", type: "exams" },
  { date: "2024-11-09", type: "exams" },
  { date: "2024-11-11", type: "exams" },
  { date: "2024-11-12", type: "exams" },
  { date: "2024-11-13", type: "exams" },
  { date: "2024-11-14", type: "exams" },
  { date: "2024-11-15", type: "exams" },
  { date: "2024-11-16", type: "exams" },
  { date: "2024-11-18", type: "exams" },
  { date: "2024-11-19", type: "exams" },
  { date: "2024-11-20", type: "exams" },
  { date: "2024-11-21", type: "exams" },
  { date: "2024-11-22", type: "exams" },
  { date: "2024-11-23", type: "exams" },
  { date: "2024-11-26", type: "exams" },
  { date: "2024-11-27", type: "exams" },
  { date: "2024-11-28", type: "exams" },
  { date: "2024-11-29", type: "exams" },
  { date: "2024-11-30", type: "exams" },
  { date: "2024-12-01", type: "holiday" },
  { date: "2024-12-02", type: "exams" },
  { date: "2024-12-03", type: "exams" },
  { date: "2024-12-04", type: "exams" },
  { date: "2024-12-05", type: "exams" },
  { date: "2024-12-06", type: "exams" },
  { date: "2024-12-07", type: "exams" },
  { date: "2024-12-08", type: "holiday" },
  { date: "2024-12-09", type: "exams" },
  { date: "2024-12-10", type: "exams" },
  { date: "2024-12-11", type: "exams" },
  { date: "2024-12-12", type: "exams" },
  { date: "2024-12-13", type: "exams" },
  { date: "2024-12-14", type: "exams" },
  { date: "2024-12-15", type: "holiday" },
  { date: "2024-12-16", type: "exams" },
  { date: "2024-12-17", type: "exams" },
  { date: "2024-12-18", type: "exams" },
  { date: "2024-12-19", type: "exams" },
  { date: "2024-12-20", type: "exams" },
  { date: "2024-12-25", type: "holiday" },
  { date: "2024-12-16", type: "result" },
  { date: "2025-01-06", type: "result" },
];

const events = [
  {
    title: "4th Review",
    from: "2024-09-05",
    to: "2024-09-12",
    type: "assignment",
    description:
      "4th and Final Review of Creative Assignment. Student must complete 100% work, PPT and Word document with Spiral",
  },
  {
    title: "Ganesh Chaturthy",
    from: "2024-09-07",
    to: "2024-09-07",
    type: "holiday",
    description: "",
  },
  {
    title: "Mid Semester Exams",
    from: "2024-09-23",
    to: "2024-10-01",
    type: "exams",
    description:
      'Sem 3,5,7 Mid Semester Exams. <a href="assets/mid-tt.pdf">Time-Table</a>',
  },
  {
    title: "Gandhi Jayanti",
    from: "2024-10-02",
    to: "2024-10-02",
    type: "holiday",
    description: "",
  },
  {
    title: "Mid Sem Result Declaration",
    from: "2024-10-05",
    to: "2024-10-05",
    type: "result",
    description: "Sem 3,5,7 Mid Semester Exam Result Declaration",
  },
  {
    title: "Ras Rasiya",
    from: "2024-10-08",
    to: "2024-10-09",
    type: "",
    description: "Navratri Ras Rasiya Celebration",
  },
  {
    title: "Viva and Mid Remidial Exam",
    from: "2024-10-14",
    to: "2024-10-21",
    type: "exams",
    description:
      "Sem 3,5,7 Mid Semester Remidial Exam, Internal Submission and Viva",
  },
  {
    title: "Remidial 3rd Sem Mid Semester Result",
    from: "2024-10-24",
    to: "2024-10-24",
    type: "result",
    description: "Sem 3,5,7 Mid Semester Remidial Exam Result Declaration",
  },
  {
    title: "Term End",
    from: "2024-10-26",
    to: "2024-10-26",
    type: "term",
    description: "Sem 3,5,7 Term End",
  },
  {
    title: "Diwali Vacation",
    from: "2024-10-29",
    to: "2024-11-06",
    type: "holiday",
    description: "Diwali Vacation",
  },
  {
    title: "ESE Practical Exam",
    from: "2024-11-09",
    to: "2024-11-23",
    type: "exams",
    description: "End Semester Practical Exam",
  },
  {
    title: "ESE Remedial",
    from: "2024-11-09",
    to: "2024-11-23",
    type: "exams",
    description: "End Semester Sem 2,4,6,8 Remidial Exam",
  },
  {
    title: "ESE Regular Exam",
    from: "2024-11-26",
    to: "2024-12-20",
    type: "exams",
    description: "End Semester Regular/ Remidial Exam Sem 3,5,7",
  },
  {
    title: "ESE Remidial Result",
    from: "2024-12-16",
    to: "2024-12-16",
    type: "result",
    description: "End Semester Remidial Sem 2,4,6,8 Result Declaration",
  },
  {
    title: "ESE Regular Result",
    from: "2025-01-06",
    to: "2025-01-06",
    type: "result",
    description: "End Semester Exam Regular Sem 3,5,7 Result Declaration",
  },
];

const daysTag = document.querySelector(".days"),
  currentDate = document.querySelector(".current-date"),
  prevNextIcon = document.querySelectorAll(".icons span");

let date = new Date(),
  currYear = date.getFullYear(),
  currMonth = date.getMonth();

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

const renderCalendar = () => {
  let firstDayofMonth = new Date(currYear, currMonth, 0).getDay(),
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(),
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
  let liTag = "";

  // Creating li for previous month's last days
  for (let i = firstDayofMonth; i > 0; i--) {
    liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
  }

  // Creating li for all days of the current month
  for (let i = 1; i <= lastDateofMonth; i++) {
    let isToday =
      i === date.getDate() &&
      currMonth === new Date().getMonth() &&
      currYear === new Date().getFullYear()
        ? "active"
        : "";

    let dayOfWeek = new Date(currYear, currMonth, i).getDay();
    let isSunday = dayOfWeek === 0 ? "sunday" : "";

    // Check if the current date matches any date in the cal object
    let eventClass = "";
    cal.forEach((event) => {
      let eventDate = new Date(event.date);
      if (
        eventDate.getFullYear() === currYear &&
        eventDate.getMonth() === currMonth &&
        eventDate.getDate() === i
      ) {
        eventClass = event.type; // Use event type as the class name
      }
    });

    liTag += `<li class="${isToday} ${isSunday} ${eventClass}">${i}</li>`;
  }

  // Creating li for next month's first days
  for (let i = lastDayofMonth; i <= 6; i++) {
    liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
  }

  currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current month and year as text
  daysTag.innerHTML = liTag;

  colorSundays(); // Apply red color to Sundays
};

const colorSundays = () => {
  const sundays = document.querySelectorAll(".sunday");
  sundays.forEach((sunday) => {
    sunday.style.color = "rgb(253, 95, 95)"; // Apply red font color to Sundays
  });
};

renderCalendar();

prevNextIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
    if (currMonth < 0 || currMonth > 11) {
      date = new Date(currYear, currMonth, new Date().getDate());
      currYear = date.getFullYear();
      currMonth = date.getMonth();
    } else {
      date = new Date();
    }
    renderCalendar();
  });
});

// Function to render event containers
// const renderEventContainers = () => {
//   const container = document.querySelector(".timeline"); // Assuming there's a main container

//   events.forEach((event, index) => {
//     const { title, from, to, description, type } = event;

//     const isLeft = index % 2 === 0;
//     const containerClass = isLeft ? "left-container" : "right-container";
//     const arrowClass = isLeft
//       ? "left-container-arrow"
//       : "right-container-arrow";

//     const dateText = from === to ? from : `${from} to ${to}`;

//     const eventDiv = document.createElement("div");
//     eventDiv.classList.add("container", containerClass);

//     eventDiv.innerHTML = `
//       <div class="text-box">
//         <h2 class="${type}">${title}</h2>
//         <small>${dateText}</small>
//         <p>${description}</p>
//         <span class="${arrowClass}"></span>
//       </div>
//     `;

//     container.appendChild(eventDiv);
//   });
// };

// renderEventContainers();

const today = new Date(); // Get the current date once

for (let i = 0; i < events.length; i++) {
  // Convert event 'to' date string to a Date object
  const eventEndDate = new Date(events[i].to);

  // Check if the event end date is before or equal to today
  if (eventEndDate >= today) {
    const container = document.querySelector(".timeline"); // Assuming there's a main container
    const { title, from, to, description, type } = events[i];

    const isLeft = i % 2 === 0;
    const containerClass = isLeft ? "left-container" : "right-container";
    const arrowClass = isLeft
      ? "left-container-arrow"
      : "right-container-arrow";

    const dateText = from === to ? from : `${from} to ${to}`;

    const eventDiv = document.createElement("div");
    eventDiv.classList.add("container", containerClass);

    eventDiv.innerHTML = `
        <div class="text-box">
          <h2 class="${type}">${title}</h2>
          <small>${dateText}</small>
          <p>${description}</p>
          <span class="${arrowClass}"></span>
        </div>
      `;

    container.appendChild(eventDiv);
  }
}
