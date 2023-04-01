const form = document.querySelector("form");
const passField = form.querySelector(".create-password");
const passInput = passField.querySelector(".password");
const cPassField = form.querySelector(".confirm-password");
const cPassInput = cPassField.querySelector(".cPassword");

//Password validation
function createPass() {
  const passPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; //pattern for 8 characters with one number, character, small and capital letter
  if (!passInput.value.match(passPattern)) {
    return passField.classList.add("invalid"); //adding invalid class if password input value do not match with passPattern
  }
  passField.classList.remove("invalid"); //removing invalid class if password input value matched with passPattern
}

//Confirm password validation
function confirmPass() {
  if (passInput.value !== cPassInput.value || cPassInput.value === "") {
    return cPassField.classList.add("invalid");
  }
  cPassField.classList.remove("invalid");
}

//calling function on Form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  createPass();
  confirmPass();

  //calling fn on keyup
  passInput.addEventListener("keyup", createPass);
  cPassInput.addEventListener("keyup", confirmPass);

  if (
    !passField.classList.contains("invalid") &&
    !cPassField.classList.contains("invalid")
  ) {
    location.href = form.getAttribute("action");
  }
});
