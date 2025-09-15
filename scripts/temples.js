document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.querySelector('nav ul');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

  const currentYear = new Date().getFullYear();
  document.getElementById("currentyear").textContent = currentYear;

  const lastModified = document.lastModified;
  document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;
});
