document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent =
    "Last Modification: " + document.lastModified;

const hamburgerBtn = document.getElementById('hamburgerBtn');
const nav = document.getElementById('primaryNav');
    
hamburgerBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
  const isOpen = nav.classList.contains('open');
  hamburgerBtn.setAttribute('aria-expanded', isOpen);
});