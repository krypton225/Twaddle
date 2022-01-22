/**
 * This file connected to all HTML files.
 * We separated it into sections and indexed it.
 */

/**
 * ! INDEX OF THE FILE.
 * * Function of the eyeIcon in password field.
 */

// * click Eye Icon:
let password = document.querySelector("#password");
let myEye = document.querySelector("#eyeIcon");

myEye.addEventListener("click", () => {
  const typeAttr =
    password.getAttribute("type") === "password" ? "text" : "password";

  password.setAttribute("type", typeAttr);

  myEye.classList.toggle("fa-eye-slash");
  myEye.classList.toggle("smoothly");
});
