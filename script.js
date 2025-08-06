// This script now only handles the active state of the navigation links and the footer year.
// Each page has its own logic for content specific to that page (e.g., namaz timing fetch).

document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  document.getElementById("year").textContent = new Date().getFullYear();

  // Highlight the current page's link in the navigation
  const currentPath = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("#desktop-nav a");

  navLinks.forEach((link) => {
    // A link is active if its href matches the current page path, or if it's the home page and the path is empty
    if (link.getAttribute("href") === currentPath || (currentPath === "index.html" && link.getAttribute("href") === "index.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});