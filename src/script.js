// // this checks whether system dark mode is set
// let systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)");
// // this checks for session storage telling to override
// // the system preferences
// let theme = sessionStorage.getItem("theme");

// if (systemInitiatedDark.matches) {
//   document.getElementById("theme-toggle").innerHTML = "Light Mode";
// } else {
//   document.getElementById("theme-toggle").innerHTML = "Dark Mode";
// }

// function prefersColorTest(systemInitiatedDark) {
//   if (systemInitiatedDark.matches) {
//     document.documentElement.setAttribute("data-theme", "dark");
//     document.getElementById("theme-toggle").innerHTML = "Light Mode";
//     // this clears the session storage
//     sessionStorage.setItem("theme", "");
//   } else {
//     document.documentElement.setAttribute("data-theme", "light");
//     document.getElementById("theme-toggle").innerHTML = "Dark Mode";
//     sessionStorage.setItem("theme", "");
//   }
// }
// systemInitiatedDark.addListener(prefersColorTest);

// function modeSwitcher() {
//   // it’s important to check for overrides again
//   let theme = sessionStorage.getItem("theme");
//   // checks if reader selected dark mode
//   if (theme === "dark") {
//     document.documentElement.setAttribute("data-theme", "light");
//     sessionStorage.setItem("theme", "light");
//     document.getElementById("theme-toggle").innerHTML = "Dark Mode";
//     // checks if reader selected light mode
//   } else if (theme === "light") {
//     document.documentElement.setAttribute("data-theme", "dark");
//     sessionStorage.setItem("theme", "dark");
//     document.getElementById("theme-toggle").innerHTML = "Light Mode";
//     // checks if system set dark mode
//   } else if (systemInitiatedDark.matches) {
//     document.documentElement.setAttribute("data-theme", "light");
//     sessionStorage.setItem("theme", "light");
//     document.getElementById("theme-toggle").innerHTML = "Dark Mode";
//     // the only option left is system set light mode
//   } else {
//     document.documentElement.setAttribute("data-theme", "dark");
//     sessionStorage.setItem("theme", "dark");
//     document.getElementById("theme-toggle").innerHTML = "Light Mode";
//   }
// }

// if (theme === "dark") {
//   document.documentElement.setAttribute("data-theme", "dark");
//   sessionStorage.setItem("theme", "dark");
//   document.getElementById("theme-toggle").innerHTML = "Light Mode";
// } else if (theme === "light") {
//   document.documentElement.setAttribute("data-theme", "light");
//   sessionStorage.setItem("theme", "light");
//   document.getElementById("theme-toggle").innerHTML = "Dark Mode";
// }

// -----

// this checks whether system dark mode is set
let systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)");
// this checks for session storage telling to override
// the system preferences
let theme = sessionStorage.getItem("theme");
let themeImage = document.getElementById("theme-image");

if (systemInitiatedDark.matches) {
  themeImage.src = "src/light.png";
} else {
  themeImage.src = "src/dark.png";
}

function prefersColorTest(systemInitiatedDark) {
  if (systemInitiatedDark.matches) {
    document.documentElement.setAttribute("data-theme", "dark");
    themeImage.src = "src/light.png";
    // this clears the session storage
    sessionStorage.setItem("theme", "");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    themeImage.src = "src/dark.png";
    sessionStorage.setItem("theme", "");
  }
}
systemInitiatedDark.addListener(prefersColorTest);

function modeSwitcher() {
  // it’s important to check for overrides again
  let theme = sessionStorage.getItem("theme");
  // checks if reader selected dark mode
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "light");
    sessionStorage.setItem("theme", "light");
    themeImage.src = "src/dark.png";

    // checks if reader selected light mode
  } else if (theme === "light") {
    document.documentElement.setAttribute("data-theme", "dark");
    sessionStorage.setItem("theme", "dark");
    themeImage.src = "src/light.png";

    // checks if system set dark mode
  } else if (systemInitiatedDark.matches) {
    document.documentElement.setAttribute("data-theme", "light");
    sessionStorage.setItem("theme", "light");
    themeImage.src = "src/dark.png";

    // system set light mode
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    sessionStorage.setItem("theme", "dark");
    themeImage.src = "src/light.png";
  }
}

if (theme === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
  sessionStorage.setItem("theme", "dark");
  themeImage.src = "src/light.png";
} else if (theme === "light") {
  document.documentElement.setAttribute("data-theme", "light");
  sessionStorage.setItem("theme", "light");
  themeImage.src = "src/dark.png";
}
