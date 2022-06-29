// Assignment Code
// button
var generateBtn = document.querySelector("#generate");
var response = "";
const upperCase = ["A","B","C","D","E", "F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbericalChar = [1,2,3,4,5,6,7,8,9];
const specChar =  ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", " < ", "=", " > ", " ? ", "@"];
var crits= "";

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
  // Write password to the #password input
function generatePassword () {
  // console.log ("You Clicked the button");
// 1. Prompt for user to ask password Criteria
// brings up prompt!
  response =  parseInt(prompt ("How many characters would you like for your password? It needs to be between 8 and 128. Thanks <3."));
// a. Password length between 8-128
 if (!response)  {
  alert("Password must have a length.");
}else if (response < 8 || response > 128) {
  response = parseInt(prompt("You have to choose between 8 and 128. <3"));
 } else { 
  var littleLetters = confirm("Would you like to add some little letters?");
 //  b.Lower, Uppercase, numbers, special characters
 var bigLetters = confirm("Would you like to add BIG LETTERS?");
 var digits = confirm("Would you like to add some digits?");
  var prettyIcons = confirm("Wanna add some pretty icons(special characters)?");
 };

  if (!littleLetters && !bigLetters && !digits && !prettyIcons) {
  crits = alert("Must choose at least one password criteria. <3");
 } 
 if (littleLetters && bigLetters && digits && prettyIcons) {
    crits = lowerCase.concat(upperCase,numbericalChar,specChar);
 } else if (littleLetters && bigLetters && digits) {
  crits = lowerCase.concat(upperCase, numbericalChar);
} else if (bigLetters && digits && prettyIcons) {
    crits = upperCase.concat(numbericalChar,specChar);
 } else if (littleLetters && digits && prettyIcons) {
    crits = lowerCase.concat(numbericalChar,specChar);
 }else if (littleLetters && bigLetters && prettyIcons) {
    crits = lowerCase.concat(upperCase,specChar);
 } else if (littleLetters && bigLetters) {
    crits = lowerCase.concat(upperCase)
 } else if (littleLetters && digits) {
    crits = lowerCase.concat(numbericalChar);
 } else if (littleLetters && prettyIcons) {
    crits = lowerCase.concat(specChar);
 } else if (bigLetters && digits) {
    crits = upperCase.concat(numbericalChar);
 } else if (bigLetters && prettyIcons) {
    crits = upperCase.concat(specChar);
 }  else if (digits && prettyIcons) { 
    crits = numbericalChar.concat(specChar);
} else if (littleLetters) {
  crits = lowerCase;
} else if (bigLetters) {
  crits = upperCase;
} else if (digits) {
  crits = numbericalChar;
} else if (prettyIcons) {
  crits = specChar;
};
var choice1 = [];

for(var i = 0;i < response; i++) {
  var choices = crits[Math.floor(Math.random()* crits.length)];
  choice1.push(choices);
}
var password = choice1.join("");
UserInput(password);
return password;
}

function UserInput(password) {
  document.getElementById("password").textContent = password
}
// 2. After the prompt, validate input and 1 character type should be selected 
// 3. When all prompts answered, generate password with the selected criteria


// 4. write password to page. 
// Add event listener to generate button
// when button clicked, runs function
generateBtn.addEventListener("click", writePassword);
