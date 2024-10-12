const container = document.querySelector(".container");
const form = document.getElementById("form");
const email = document.getElementById("email");
const successMessage = document.getElementById("success_message");
const removeMessageBtn = document.getElementById("removeMsg_btn");
const userEmail = document.querySelector(".user_email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailAdress = email.value;
  const errorMessage = document.getElementById("errorMessage");
 const regexEmail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,4}$/;


  if (!regexEmail.test(emailAdress) || (emailAdress.trim()=="")) {
    email.classList.add("error");
    errorMessage.textContent = "Valid email required";
    errorMessage.style.visibility = "visible";
    email.textContent = "";

  } 
  
  else {
    successMessage.style.display = "block";
    userEmail.textContent = emailAdress;
    container.style.visibility = "hidden";
    email.classList.remove("error");
    errorMessage.textContent = "";
  }
});

removeMessageBtn.addEventListener("click", () => {
  successMessage.style.display = "none";
  container.style.visibility = "visible";
  email.value = "";
});
