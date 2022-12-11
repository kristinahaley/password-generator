// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passLength;
var isLowCase;
var isUpCase;
var isNum;
var isSpecial;

// Write password to the #password input
function writePassword() {
  askPasswordWordLength();
  askVariousProperties();
  generatePassword();
}

// Prompt asking user for their desired password length
function askPasswordWordLength() {
  var isLongEnough = false;
  while(!isLongEnough) {
    var passLength = window.prompt("Type the password length (8 - 128 char): ");
    if(passLength < 8 || passLength > 128) {
      isLongEnough = false;
    } else {
      isLongEnough = true;
    }
  }
  this.passLength = passLength;
}

// Prompt asking user if allow lower case
function askLowerCase() {
  let isLowCase = confirm("Do You Want To Allow Lower Case Letters?");
  this.isLowCase = isLowCase;
}

function askUpperCase() {
  let isUpCase = confirm("Do You Want To Allow Upper Case Letters?");
  this.isUpCase = isUpCase;
}

function askNumeric() {
  let isNum = confirm("Do You Want To Allow Numbers?");
  this.isNum = isNum;
}

function askSpecial() {
  let isSpecial = confirm("Do You Want To Allow Special Characters");
  this.isSpecial = isSpecial;
}

// Generates and displays password
function generatePassword() {
  var count = 0;
  if(this.isLowCase) {
    count++;
  }
  if(this.isUpCase) {
    count++;
  }
  if(this.isNum) {
    count++;
  }
  if(this.isSpecial) {
    count++;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
