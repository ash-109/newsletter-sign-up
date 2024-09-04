const container = document.querySelector(".container");
const form = document.getElementById("form");
const email = document.getElementById("email");
const successMessage = document.getElementById("success_message");
const dissmissMessageBtn = document.getElementById("dissmissMsg_btn");
const userEmail = document.querySelector(".user_email");

const regexEmail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,63}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  userEmail.textContent = email.value;
  successMessage.style.display = "block";
  container.style.visibility = "hidden";
});

dissmissMessageBtn.addEventListener("click", () => {
  successMessage.style.display = "none";
  container.style.visibility = "visible";
  email.value = "";
});
