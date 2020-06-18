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
const nav = document.getElementById("nav__menu");
const activeClass = document.getElementsByClassName("your-active-class");
let navLi = "";
//setting the navbar dynamically
function navbarSelection() {
  sections.forEach((section) => {
    navLi += `<li> <a class="nav__link" href="#${section.id}">
      ${section.dataset.nav}</a></li>`;
  });
  navUl.innerHTML = navLi;
}
navbarSelection();

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
function removeActiveClass(section) {
  const id = section.getAttribute("id");
  document.querySelector(`#${id}`).classList.remove("your-active-class");
  section.style.cssText =
    "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%);";
}

function addActiveClass(section) {
  const id = section.getAttribute("id");
  document.querySelector(`#${id}`).classList.add("your-active-class");
  section.style.boxShadow =
    "20px 20px 30px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)";
  section.style.backgroundColor = "crimson";
}

// calcualting when the section is active
function activeSection() {
  sections.forEach((section) => {
    let elementOffset = section.getBoundingClientRect();
    if (elementOffset.top <= 150 && elementOffset.bottom >= 150) {
      addActiveClass(section);
    } else {
      removeActiveClass(section);
    }
  });
}
document.addEventListener("scroll", activeSection);
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
