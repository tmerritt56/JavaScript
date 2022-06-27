// Assignment Code
// button
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbericalChar = "0123456789";
var specialChar = "!@#$%^&*()<>/{}[]_~`:;',./\|.+-";

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
  // Write password to the #password input
function generatePassword () {
  console.log ("You Clicked the button");
// 1. Prompt for user vto ask password Criteria
var passwordChars = "";
// brings up prompt!
 var length =  window.prompt ("How many characters would you like for your password? It needs to be between 8 and 128. Thanks <3.");
// a. Password length between 8-128
length = parseInt (length);
 if (length < 8) {
  alert("Password must contain more than 7 characters.");
  return "";
 } else if (length > 128) {
  alert("Password must be less than 128 characters.")
 }

 //  b.Lower, Uppercase, numbers, special characters
 var littleLetters = confirm("Would you like to add some little letters?");

if(littleLetters){
  passwordChars += lowerCase;
}

var bigLetters = confirm("Would you like to add BIG LETTERS?");
 if (bigLetters) {
  password += upperCase;
 }
// 2. After the prompt, validate input and 1 character type should be selected 
// 3. When all prompts answered, generate password with the selected criteria
 




// 4. write password to page. 
 return "Generated Password, will go here.";
}
// Add event listener to generate buttoN
// when button clicked, runs function
generateBtn.addEventListener("click", writePassword); 
