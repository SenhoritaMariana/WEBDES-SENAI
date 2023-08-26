const themeToggle = document.getElementById("themeToggle");
const body = document.body;

themeToggle.addEventListener("change", function() {
  if (this.checked) {
    enableDarkTheme();
  } else {
    disableDarkTheme();
  }
});

function enableDarkTheme() {
  body.classList.add("dark-theme");
}

function disableDarkTheme() {
  body.classList.remove("dark-theme");
}