let password = document.querySelector("#password");
let myEye = document.querySelector("#eyeIcon");

myEye.addEventListener("click", () => {
  const typeAttr =
    password.getAttribute("type") === "password" ? "text" : "password";

  password.setAttribute("type", typeAttr);

  myEye.classList.toggle("fa-eye-slash");
  myEye.classList.toggle("smoothly");
});
