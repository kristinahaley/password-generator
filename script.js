// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passLength = 0;
var isLowCase;
var isUpCase;
var isNum;
var isSpecial;

// Write password to the #password input
function writePassword() {
  askPasswordWordLength();
  askLowerCase();
  askUpperCase();
  askNumeric();
  askSpecial();
  askCheck();
  document.querySelector("#password").value = generatePassword();
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
  if(this.isLowCase) {
    confirm("Okie dokie! We will allow the lowercase");
  } else {
    confirm("Oh well...no lowercase then");
  }
}

function askUpperCase() {
  let isUpCase = confirm("Do You Want To Allow Upper Case Letters?");
  this.isUpCase = isUpCase;
  if(this.isUpCase) {
    confirm("Okie dokie! We will allow the uppercase");
  } else {
    confirm("Oh well...no uppercase then");
  }
}

function askNumeric() {
  let isNum = confirm("Do You Want To Allow Numbers?");
  this.isNum = isNum;
  if(this.isNum) {
    confirm("Okie dokie! We will allow numbers!");
  } else {
    confirm("Oh well...no numbers then");
  }
}

function askSpecial() {
  let isSpecial = confirm("Do You Want To Allow Special Characters");
  this.isSpecial = isSpecial;
  if(this.isSpecial) {
    confirm("Okie dokie! We will allow special characters!");
  } else {
    confirm("Oh well...no special characters then");
  }
}

function askCheck() {
  while(!isLowCase && !isUpCase && !isNum && !isSpecial) {
    confirm("ERROR: Please make a selection");
    askLowerCase();
    askUpperCase();
    askNumeric();
    askSpecial();
  }
}
// Generates and displays password
function generatePassword() {
  var genPassword = "";

  for(i = 0; i < passLength; i++) {
    var randNum = Math.floor(Math.random() * 4);
    switch(randNum) {
      case 0:
        if(this.isLowCase) {
          genPassword = genPassword.concat(getRandomLowerCaseCharacter());
        } else {
          i--;
        }
        break;
      case 1:
        if(this.isUpCase) {
          genPassword = genPassword.concat(getRandomUpperCaseCharacter());
        } else {
          i--;
        }
        break;
      case 2:
        if(this.isNum) {
          genPassword = genPassword.concat(getRandomNumericCaseCharacter());
        } else {
          i--;
        }
        break;
      case 3:
        if(this.isSpecial) {
          genPassword = genPassword.concat(getRandomSpecialCharacter());
        } else {
          i--;
        }
        break;
      }
  }
  return genPassword;
}

function getRandomLowerCaseCharacter() {
  let characters = "abcdefghijklmnopqrstuvwxyz";
  let rand = characters.charAt(Math.floor(Math.random() * characters.length));
  return rand;
}

 function getRandomUpperCaseCharacter() {
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   let rand = characters.charAt(Math.floor(Math.random() * characters.length));
   return rand;
 }

 function getRandomNumericCaseCharacter() {
   let characters = "0123456789";
   let rand = characters.charAt(Math.floor(Math.random() * characters.length));
   return rand;
 }

 function getRandomSpecialCharacter() {
  let characters = "!@#$%^&*(){}[]=<>/.";
   let rand = characters.charAt(Math.floor(Math.random() * characters.length));
   return rand;
 }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
