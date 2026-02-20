const password = prompt("Create a password: ");
// const passwordSize = password.length;

/*
// validação simples - verificar se tem +8 digitos
if(passwordSize < 8){
    alert("Invalid password, must be at least 8 digits long!")

} else {
    alert("Valid password!")

}

// verificar se tem numero e maiuscula
const hasNumber = /[0-9]/.test(password)
const capitalLetter = /[A-Z]/.test(password)

if(!hasNumber){
    alert("Must contain at least one number!")

} else if(!capitalLetter){
    alert("Must contain at least one capital letter!")

} else {
    alert("Valid password!")
}
    */

function validatePassword(password) {
  const passwordSize = password.length;

  // verificar se tem numero e maiuscula
  const hasNumber = /[0-9]/.test(password);
  const capitalLetter = /[A-Z]/.test(password);

  // validação simples - verificar se tem +8 digitos
  if (passwordSize < 8) {
    alert("Invalid password, must be at least 8 digits long!");
  } else {
    alert("Valid password!");
  }

  if (!hasNumber) {
    alert("Must contain at least one number!");
  } else if (!capitalLetter) {
    alert("Must contain at least one capital letter!");
  } else {
    alert("Valid password!");
  }
}

validatePassword(password);
