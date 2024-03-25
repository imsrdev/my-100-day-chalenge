const PasswordBox = document.getElementById("password");
const Lenght = 12;
const UpperCase = "ABCDEFGHIJKLNOPQVRSTWTXZMUY";
const LowerCase = "abcdefghijklnmopqvstowxyz";
const number = "0123456789";
const symbls = "!@#$%{}[]?/><+-)(_";
const allchars = UpperCase + LowerCase + number + symbls;

function CreatPassword() {
  let password = "";
  password += UpperCase[Math.floor(Math.random() * UpperCase.length)];
  password += LowerCase[Math.floor(Math.random() * LowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbls[Math.floor(Math.random() * symbls.length)];
  while (Lenght > password.length) {
    password += allchars[Math.floor(Math.random() * allchars.length)];
  }
  PasswordBox.value = password;
}

function CopyPassword() {
  PasswordBox.select();
  document.execCommand("copy");
}
