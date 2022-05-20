// Assignment Code
let generateBtn = document.querySelector("#generate");
let inputPasswordLen = document.getElementById('passwordlength');

let chkBxlowercase = document.getElementById('lowercase');
let chkBxuppercase = document.getElementById('uppercase');
let chkBxnumeric = document.getElementById('numeric');
let specialcharacters = document.getElementById('specialcharacters');

let caseSelectedValid = false;
let passwordLengthValid = false;

var charactersU = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var charactersL = 'abcdefghijklmnopqrstuvwxyz';
var charactersN = '0123456789';
var charactersS = '!@#$%^&*()_+{}=?></.,';

inputPasswordLen.addEventListener('change', function () {
  passwordLengthValidate();
});

chkBxlowercase.addEventListener('change', function () {
  checkonecaselettersValidate();
});

chkBxuppercase.addEventListener('change', function () {
  checkonecaselettersValidate();
});

// validate one case is selected
function checkonecaselettersValidate() {
  if (!chkBxlowercase.checked && !chkBxuppercase.checked) {
    caseSelectedValid = false;
    alert("You must select: Lowercase and/or Uppercase.");
  }
  else {
    caseSelectedValid = true;
  }
};

// validate password length
function passwordLengthValidate() {
  let passwordLength = document.getElementById('passwordlength').value;
  if (!passwordLength) {
    alert("Enter a number between 8 and 128.");
    return;
  }
  if (passwordLength < "8" && passwordLength > "128") {
    alert("Enter a number between 8 and 128.");
    passwordLengthValid = false;
  } else {
    passwordLengthValid = true;
  }
};

function getLowercaseLetters(){
  Math.random().toString(36).slice(2, 7);
}

function generatePassword() {
  if (!caseSelectedValid && !passwordLengthValid) {
    checkonecaselettersValidate();
    passwordLengthValidate();
    return;
  } else {
    let ret = "";

    for (var i = 0; i < passwordLength.value.length; i++) {
      ret += chkBxlowercase.charAt(Math.floor(Math.random()
        * passwordLength.value.length)
      );

      return ret;
    }
  }
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  if (!password){
    return;
  }

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

