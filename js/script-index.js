/** **************************************
 * For Toogle the hamburger menu.
 * *************************************** */

function toggleMenu() {
  let toggle = document.querySelector(".navbar__toggle");
  toggle.classList.toggle("active");

  let menu = document.querySelector(".navbar__menu");
  menu.classList.toggle("active");
}

window.addEventListener("scroll", function () {
  const navBar = document.querySelector("#navBar");
  navBar.classList.toggle("sticky-scroll", window.scrollY > 0);
});

/** **************************************
 * For CSS3 Animate the section in viewport.
 * *************************************** */

const inViewport = (entries, observer) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
  });
};

const Obs = new IntersectionObserver(inViewport);
const obsOptions = {};

// Attach observer to every [data-inviewport] element:
const ELs_inViewport = document.querySelectorAll("[data-inviewport]");
ELs_inViewport.forEach((EL) => {
  Obs.observe(EL, obsOptions);
});

/** **************************************
 * For Go to top icon.
 * *************************************** */

window.addEventListener("scroll", function () {
  const goToTop = document.querySelector("#goToTop");
  goToTop.classList.toggle("show-goToTop", window.scrollY > 100);
});
