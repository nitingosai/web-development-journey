const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const password = {
  first: "",
  second: "",
};

const instructionEl = document.getElementById("instruction-el");
const passwordEl1 = document.getElementById("password-el1");
const passwordEl2 = document.getElementById("password-el2");
const passLengthEl = document.getElementById("pass-length");

function renderPasswords() {
  if (passLengthEl.value === "") {
    instructionEl.innerText = "Enter password length first";
    passwordEl1.innerText = "";
    passwordEl2.innerText = "";
  } else if (passLengthEl.value >= 5 && passLengthEl.value <= 15) {
    password.first = generatePassword();
    password.second = generatePassword();
    passwordEl1.innerText = password.first;
    passwordEl2.innerText = password.second;
    instructionEl.innerText = "";
  } else {
    instructionEl.innerText = "Enter a valid length";
    passwordEl1.innerText = "";
    passwordEl2.innerText = "";
  }
}

function getRandomIndex() {
  let randomIndex = 0;
  randomIndex = Math.floor(Math.random() * characters.length);
  return randomIndex;
}

function generatePassword() {
  let combinations = "";
  for (let i = 0; i < passLengthEl.value; i++) {
    combinations += characters[getRandomIndex()];
  }
  return combinations;
}
