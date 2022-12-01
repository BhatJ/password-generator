// Assignment code here

// Add arrays for each character type

// Special characters
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];

// Numerical characters
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Lowercase characters
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Uppercase characters
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// Generate password function
function generatePassword()
{
  // Ask user for their choice of character type
  var lowercase = window.confirm("Do you want to include lowercase characters?\nClick OK for YES, click Cancel for NO.");
  var uppercase = window.confirm("Do you want to include uppercase characters?\nClick OK for YES, click Cancel for NO.");
  var numeric = window.confirm("Do you want to include numeric characters?\nClick OK for YES, click Cancel for NO.");
  var special = window.confirm("Do you want to include special characters?\nClick OK for YES, click Cancel for NO.");

  // Check they selected at least one character type
  if ( (lowercase === false) && (uppercase === false) && (numeric === false) && (special === false) )
  {
    window.alert("You must select at least one criteria!");
    return '';
  }

  // Ask the user for a password length
  const passwordLength = Number(window.prompt("Enter password length between 8 and 128 characters"));

  // Check that the length is a number
  if ( isNaN(passwordLength) )
  {
    window.alert("You need to enter a number!");
    return '';
  }
  
  // Check the length is valid
  if ( (passwordLength < 8) || (passwordLength > 128) )
  {
    window.alert("Invalid password length!");
    return '';
  }

  return "password123";
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
