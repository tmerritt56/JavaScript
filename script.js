// Assignment Code
// button
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbericalChar = "0123456789";
var specialChar = "!@#$%^&*()<>/{}[]_~`:;',./\|.+-";


// Write password to the #password input
function generatePassword () {
  console.log ("You Clicked the button");
// 1. Prompt for user vto ask password Criteria
 var choice =  window.prompt ("How many characters would you like for your password?")
// brings up prompt!
if (!choice) {
  return;
}
// returns undefined

  // a. Password length between 8-128
//  b.Lower, Uppercase, numbers, special characters
// 2. After the prompt, validate input and 1 character type should be selected 
// 3. When all prompts answered, generate password with the selected criteria





// 4. write password to page. 
  return "Generated Password, will go here.";
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate buttoN
// when button clicked, runs function
generateBtn.addEventListener("click", writePassword); 
