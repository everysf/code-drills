// Day 05
// Activity 05


// This is our password strength checker function. Refer to the README.md for
// instructions on the behavior.
function checkStrength(password) {
  // ----- Your code goes here -----

  var number = "1234567890";
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var strongLength = password.length > 6;
  var containsSpecial = false;
  var containsNumber = false;
  var containsLetter = false;

  // ----- End of your code area -----


for (var i = 0; i < password.length; i++) {

  if (!containsNumber && number.includes(password[i]) && !numbers.incldes(password[i])) {
    containsSpecial == true;
  } else if (!containsNumber && number.includes(password[i])) {
    containsNumber == true;
  } else if (!containsLetter && alphabet.includes(password[i])) {
    containsLetter == true;
  }
}

if (containsLetter && containsNumber && strongLength) {
  if (containsSpecial) {
    return "Password is very strong";
  } else {
    return "Password is strong";
  }
} else if (!strongLength && !containsNumber && containsLetter && !containsSpecial) {
  return "Your passwork is weak";
} else {
  return "your password is average";
}

}

// document.ready shorthand
$(function () {

  // click listener on the submit button
  $(document).on("click", "#password-button", function (event) {
    // This prevents the submit button from refreshing the page
    event.preventDefault();

    // Check the strength of the password and store the return value inside a variable
    var passwordStrength = checkStrength($("#password-input").val());

    // Clear the password input field after we have grabbed the value already
    $("#password-input").val("");
    
    // Display the result of the password check in our password strength div
    $("#password-strength").text(passwordStrength)

  })
})