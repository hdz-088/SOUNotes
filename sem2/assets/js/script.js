let systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)");

let theme = sessionStorage.getItem("theme");
let themeImage = document.getElementById("theme-image");

if (systemInitiatedDark.matches) {
  themeImage.src = "assets/img/light.png";
} else {
  themeImage.src = "assets/img/dark.png";
}

function prefersColorTest(systemInitiatedDark) {
  if (systemInitiatedDark.matches) {
    document.documentElement.setAttribute("data-theme", "dark");
    themeImage.src = "assets/img/light.png";
    sessionStorage.setItem("theme", "");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    themeImage.src = "assets/img/dark.png";
    sessionStorage.setItem("theme", "");
  }
}
systemInitiatedDark.addListener(prefersColorTest);

function modeSwitcher() {
  let theme = sessionStorage.getItem("theme");

  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "light");
    sessionStorage.setItem("theme", "light");
    themeImage.src = "assets/img/dark.png";

  } else if (theme === "light") {
    document.documentElement.setAttribute("data-theme", "dark");
    sessionStorage.setItem("theme", "dark");
    themeImage.src = "assets/img/light.png";

  } else if (systemInitiatedDark.matches) {
    document.documentElement.setAttribute("data-theme", "light");
    sessionStorage.setItem("theme", "light");
    themeImage.src = "assets/img/dark.png";

  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    sessionStorage.setItem("theme", "dark");
    themeImage.src = "assets/img/light.png";
  }
}

if (theme === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
  sessionStorage.setItem("theme", "dark");
  themeImage.src = "assets/img/light.png";
} else if (theme === "light") {
  document.documentElement.setAttribute("data-theme", "light");
  sessionStorage.setItem("theme", "light");
  themeImage.src = "assets/img/dark.png";
}
