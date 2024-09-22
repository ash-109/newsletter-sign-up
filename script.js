const container = document.querySelector(".container");
const form = document.getElementById("form");
const email = document.getElementById("email");
const successMessage = document.getElementById("success_message");
const removeMessageBtn = document.getElementById("removeMsg_btn");
const userEmail = document.querySelector(".user_email");
    email.classList.remove("error");

function validateEmail(email) {
  const regexEmail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,4}$/;
  return regexEmail.test(email)
 }

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailAdress= email.value
 if(validateEmail(emailAdress)){
  successMessage.style.display = "block";
  userEmail.textContent = email.value;
  container.style.visibility = "hidden";
}
  else{
  email.classList.add('error')
  document.getElementById('errorMessage').style.visibility='visible'
  email.style.background='hsl(4, 100%, 67%)'
 
}
 

});

removeMessageBtn.addEventListener("click", () => {
  successMessage.style.display = "none";
  container.style.visibility = "visible";
  email.value =""
});
