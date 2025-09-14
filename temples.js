document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.querySelector("nav ul");

  // Hamburger menu functionality
  hamburger.addEventListener("click", () => {
    if (navMenu.style.display === "block") {
      navMenu.style.display = "none";
      hamburger.textContent = "☰";
    } else {
      navMenu.style.display = "block";
      hamburger.textContent = "✖";
    }
  });
});



document.addEventListener("DOMContentLoaded", (event) => {
  const currentYear = new Date().getFullYear();
  document.getElementById("currentyear").textContent = currentYear;

  const lastModified = document.lastModified;
  document.getElementById(
    "lastModified"
  ).textContent = `Last Modified: ${lastModified}`;
});