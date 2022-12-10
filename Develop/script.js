// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  askPasswordWordLength();
  askVariousProperties();
  generatePassword();
}

// Prompt asking user for their desired password length
function askPasswordWordLength() {
  window.prompt("Type the password length (8 - 128 char): ");
}

// Prompt asking user for other desired properties of their password
function askVariousProperties() {
  window.prompt("Other thing");
}

// Generates and displays password
function generatePassword() {

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
