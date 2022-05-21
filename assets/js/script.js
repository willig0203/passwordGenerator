// Assignment Code
let generateBtn = document.querySelector("#generate");
let inputPasswordLen = document.getElementById('passwordlength');

let chkBxlowercase = document.getElementById('lowercase');
let chkBxuppercase = document.getElementById('uppercase');
let chkBxnumeric = document.getElementById('numeric');
let specialcharacters = document.getElementById('specialcharacters');

let caseSelectedValid = false;
let passwordLengthValid = false;

let charactersL = 'abcdefghijklmnopqrstuvwxyz';
let charactersU = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let charactersN = '23456789';
let charactersS = '!@#$%()';
//" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

// events to validate input
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
  if (Number(passwordLength) < 8 || Number(passwordLength) > 128) {
    alert("Enter a number between 8 and 128.");
    passwordLengthValid = false;
  } else {
    passwordLengthValid = true;
  }
};

// validate and create password
function generatePassword() {
  if (!caseSelectedValid) {
    checkonecaselettersValidate();
    return;
  }
  if (!passwordLengthValid) {
    passwordLengthValidate();
    return;
  }

  let randy = "";
  let passwordLength = document.getElementById('passwordlength').value;
  let options = 0;

  if (chkBxlowercase.checked) { options = options + 1; }
  if (chkBxuppercase.checked) { options = options + 1; }
  if (chkBxnumeric.checked) { options = options + 1; }
  if (specialcharacters.checked) { options = options + 1; }

  for (var i = 0; i < passwordLength; i++) {
    if (chkBxlowercase.checked && randy.length < passwordLength) {
      randy += charactersL[Math.floor(Math.random() * Number(charactersL.length))];
    }
    if (chkBxuppercase.checked && randy.length < passwordLength) {
      randy += charactersU[Math.floor(Math.random() * Number(charactersU.length))];
    }
    if (chkBxnumeric.checked && randy.length < passwordLength) {
      randy += charactersN[Math.floor(Math.random() * Number(charactersN.length))];
    }
    if (specialcharacters.checked && randy.length < passwordLength) {
      randy += charactersS[Math.floor(Math.random() * Number(charactersS.length))];
    }
  }

  return randy.split('').sort(function(){return 0.5-Math.random()}).join('');
};

// Write password to the #password input
function writePassword() {
  let password = generatePassword();

  if (!password){
    alert('No Password Generated!')
    return;
  }

  let passwordText = document.querySelector("#password");
  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

