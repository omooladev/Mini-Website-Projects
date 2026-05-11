let firstname = document.querySelector("#firstname");
const emailaddress = document.querySelector("#emailaddress");
const form = document.querySelector(".form");
form.addEventListener("submit", CLICKED);

function CLICKED(e) {
  e.preventDefault();
  console.log(firstname.value, emailaddress.value);
}
