let chatIcon = document.getElementById("chatIcon");
let chats = document.getElementById("chats");

chatIcon.addEventListener("click", () => {
  chats.classList.toggle("open-chats");
});
