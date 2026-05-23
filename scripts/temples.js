// temples.js

// Footer Year
const year = document.querySelector("#year");
year.textContent = new Date().getFullYear();

// Last Modified
const lastModified = document.querySelector("#lastModified");
lastModified.textContent = `Last Modified: ${document.lastModified}`;

// Hamburger Menu
const menuBtn = document.querySelector("#menu-btn");
const navMenu = document.querySelector("#nav-menu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("show");

    if(navMenu.classList.contains("show")){
        menuBtn.textContent = "✖";
    } else {
        menuBtn.textContent = "☰";
    }

});