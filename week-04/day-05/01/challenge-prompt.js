// Activity 1


// In this activity, we're creating a function that sings the
// "99 Bottles of Beer on the Wall song"

// -------------------------------------------------------
//                Helper Functions (Optional)
//
// -------------------- Your Code Here --------------------





// --------------------- End Code Area --------------------


// -------------------------------------------------------
//                  Singing 99-Bottles Function
// -------------------------------------------------------
function sing(maxBottles) {
  // -------------------- Your Code Here --------------------

  console.log(maxBottles)
  
  for (var i = maxBottles; i > 0; i--) {
    var verse = $("<p>")
    verse.text(i + " bottles of beer on the wall " + i + " bottles of beer. Take one down, pass it around, " + i + " bottles of beer on the wall!")
    $("#output-area").append(verse)
  }


  // --------------------- End Code Area --------------------
}


// This sets up a listener that calls on the `sing` function with the user input
$(function() {
  $(document).on("click", "button[type=submit]", function(event){
    event.preventDefault();

    num = $("input").val().trim();
    $("#output-area").empty();
    sing(num);

  });
})