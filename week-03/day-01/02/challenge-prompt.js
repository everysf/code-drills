// Day 01
// Activity 02

// This function takes in a string and returns a jQuery element.
// The element should be a button that contains the argument string as both
// its text value and its data value. We will be using this button to
// display the string in the display-area when clicked later.
var buttonText;

function createButton() {
  // ---------- Your Code Here ----------

  buttonText = $("#user-input").val().trim()
  console.log(buttonText)
  displayContent()

  // ---------- End of Code area ----------
}



// This function is executed when one of our generated buttons is clicked.
// We've been using anonymous functions up until now, but we can define this
// function before hand and pass in the pointer to this function in the
// click listener.
// This function should take the string stored in the data field of the button
// that was clicked on and append it to the display-area.
function displayContent(event) {
  // ---------- Your Code Here ----------

  var newButton = $("<button>")
  $(newButton).append(buttonText)
  $("#button-area").append(newButton)

  // ---------- End of Code area ----------
}



// document.ready shorthand
// Put your click listeners here.
$(function () {
  // ---------- Your Code Here ----------

  $("#submit-button").on("click", createButton())
  $("#clear-button").on("click", function() {
    $("#button-area").empty
  })
  // ---------- End of Code area ----------
})