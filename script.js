
let greeting = document.querySelector("#greeting");

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
    greeting.classList.remove("fade-in")
    greeting.classList.add("no-display");
    }, 3000);
  });