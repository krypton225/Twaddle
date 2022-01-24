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
