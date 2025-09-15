const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  if (navMenu.style.display === 'none' || navMenu.style.display === '') {
    navMenu.style.display = 'block';
  } else {
    navMenu.style.display = 'show';
  }
});




document.addEventListener("DOMContentLoaded", (event) => {
  const currentYear = new Date().getFullYear();
  document.getElementById("currentyear").textContent = currentYear;

  const lastModified = document.lastModified;
  document.getElementById(
    "lastModified"
  ).textContent = `Last Modified: ${lastModified}`;
});


//hola