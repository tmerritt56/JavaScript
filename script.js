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
// 1. Prompt for user to ask password Criteria
// brings up prompt!
 var length =  parseInt(window.prompt ("How many characters would you like for your password? It needs to be between 8 and 128. Thanks <3."));
// a. Password length between 8-128
if (!length) {
  alert("Password must have a length.")
}else if (length < 8) {
  alert("Password must contain more than 7 characters.");
  return "";
 } else if (length > 128) {
  alert("Password must be less than 128 characters.")
 } else { var littleLetters = confirm("Would you like to add some little letters?");
 //  b.Lower, Uppercase, numbers, special characters
 var bigLetters = confirm("Would you like to add BIG LETTERS?");
 var digits = confirm("Would you like to add some digits?");
  var prettyIcons = confirm("Wanna add some pretty icons(special characters)?");
 }  if (!littleLetters, !bigLetters, !digits, !prettyIcons) {
  choices = alert("Must choose at least one password criteria. <3")
 }

 }

// 2. After the prompt, validate input and 1 character type should be selected 
// 3. When all prompts answered, generate password with the selected criteria


// 4. write password to page. 
// Add event listener to generate button
// when button clicked, runs function
generateBtn.addEventListener("click", writePassword); 
