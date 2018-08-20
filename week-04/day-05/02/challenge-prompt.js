// Activity 2


// In this activity, we're creating a function that finds the
// factorial of a number the user gives.

// -------------------------------------------------------
//                   Factorial Function
// -------------------------------------------------------
function factorial(num) {
  // -------------------- Your Code Here --------------------

  for (var i = num-1; i > 0; i--) {

    num = num * i
    console.log(num)

  }
  
  $("#output-area").text(num)

  // --------------------- End Code Area --------------------
}


// This listens for and calls on the `factorial` function with the user input
$(function() {
  $(document).on("click", "button[type=submit]", function(event){
    event.preventDefault();
    
    num = $("input").val().trim();
    $("#output-area").text(factorial(num));

  });
})