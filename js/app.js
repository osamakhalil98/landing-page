/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const sections = document.querySelectorAll("section");
const navUl = document.getElementById("navbar__list");
const header = document.querySelector(".page__header");
console.log(header);
const nav = document.getElementById("nav__menu");
nav.style.backgroundColor = "black";
navUl.style.textAlign = "center";
let navLi = "";
sections.forEach((section) => {
  navLi += `<li> <a class="nav__link" href="#${section.id}">
    ${section.dataset.nav}</a></li>`;
});
navUl.innerHTML = navLi;

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
