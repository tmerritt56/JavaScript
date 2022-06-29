// Assignment Code
// button
var generateBtn = document.querySelector("#generate");
var character = "";
const upperCase = [ "A","B","C","D","E", "F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lowerCase = [ "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbericalChar = [1,2,3,4,5,6,7,8,9];
const specChar = [ "!","@","#","$"];

var crits= "";
var test = "";

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
  character =  parseInt(window.prompt ("How many characters would you like for your password? It needs to be between 8 and 128. Thanks <3."));
// a. Password length between 8-128
if (!character) {
  alert("Password must have a length.");
}else if (character < 8) {
  alert("Password must contain more than 7 characters.");
  return "";
 } else if (character> 128) {
  alert("Password must be less than 128 characters.");
 } else { var littleLetters = confirm("Would you like to add some little letters?");
 //  b.Lower, Uppercase, numbers, special characters
 var bigLetters = confirm("Would you like to add BIG LETTERS?");
 var digits = confirm("Would you like to add some digits?");
  var prettyIcons = confirm("Wanna add some pretty icons(special characters)?");
 };

  if (!littleLetters && !bigLetters && !digits && !prettyIcons) {
  crits = alert("Must choose at least one password criteria. <3");
 } 
 if (littleLetters && bigLetters && digits && prettyIcons) {
  // want it to generate password. 
    test = crits.concat([upperCase,lowerCase,numbericalChar,specChar,character,]);
  console.log(test);
 } else if (littleLetters && bigLetters && digits) {
  test = crits.concat([upperCase, lowerCase, numbericalChar, character]);
  console.log(test);
} else if (bigLetters && digits && prettyIcons) {
  // want it to generate password. 
    test = crits.concat([upperCase,numbericalChar,specChar,character,]);
  console.log(test);
 } else if (littleLetters && digits && prettyIcons) {
  // want it to generate password. 
    test = crits.concat([lowerCase,numbericalChar,specChar,character,]);
  console.log(test);
 }else if (littleLetters && bigLetters && prettyIcons) {
  // want it to generate password. 
    test = crits.concat([upperCase,lowerCase,specChar,character,]);
  console.log(test);
 } else if (littleLetters && bigLetters) {
  // want it to generate password. 
    test = crits.concat([upperCase,lowerCase,character,]);
  console.log(test);
 } else if (littleLetters && digits) {
  // want it to generate password. 
    test = crits.concat([lowerCase,numbericalChar,character,]);
  console.log(test);
 } else if (littleLetters && prettyIcons) {
  // want it to generate password. 
    test = crits.concat([lowerCase,specChar,character,]);
  console.log(test);
 } else if (bigLetters && digits) {
  // want it to generate password. 
    test = crits.concat([upperCase,numbericalChar,character,]);
  console.log(test);
 } else if (bigLetters && prettyIcons) {
  // want it to generate password. 
    test = crits.concat([upperCase,specChar,character,]);
  console.log(test);
 }  else if (digits && prettyIcons) {
  // want it to generate password. 
    test = crits.concat([numbericalChar, specChar, character,]);
  console.log(test);
} else if (littleLetters) {
  test = crits.concat([lowerCase,character]);
} else if (bigLetters) {
  test = crits.concat([upperCase,character]);
} else if (digits) {
  test = crits.concat([numbericalChar,character]);
} else if (prettyIcons) {
  test = crits.concat([specChar, character]);
};
var choice1 = [];

for(var i = 0;i < character; i++) {
  var choices = test[Math.floor(Math.random()* test.length)];
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
