document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent =
    "Last Modification: " + document.lastModified;

const hamburgerBtn = document.getElementById("hamburgerBtn");
const navMenu = document.getElementById("primaryNav");

hamburgerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  hamburgerBtn.classList.toggle("open");
});