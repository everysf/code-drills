// Day 01
// Activity 01


// wait for the DOM to finish loading (document.ready)

$(document).ready( function() {

  // Create a click listener for the submit button

  $("#submit").on("click", function() {

    // stop the default behavior of the submit button

    event.preventDefault();

    // pull the values off the user input form and store them in seperate variables

    var firstName = $("#firstName").val().trim();
    var lastName = $("#lastName").val().trim();
    var occupation = $("#occupation").val().trim();
    var city = $("#city").val().trim();
    var state = $("#state").val().trim();

    // clear the form after we're done storing the values

    $("#firstName").find("input[type=text], textarea").val("")
    $("#lastName").find("input[type=text], textarea").val("")
    $("#occupation").find("input[type=text], textarea").val("")
    $("#city").find("input[type=text], textarea").val("")
    $("#state").find("input[type=text], textarea").val("")

    // generate the divs needed to display the user data and put the values 
    // we stored from the form inside the divs

    var dataDiv = $("<div>");
    $(dataDiv).append("Name: " + firstName + " " + lastName + "<br>")
    $(dataDiv).append("Occupation: " + occupation + "<br>")
    $(dataDiv).append("Location: " + city + ", " + state + "<br>")
    console.log(dataDiv)


    // empty the display area and display the divs we just created in the display area
    $(".userData").empty()
    $(".userData").append(dataDiv)
  
  })
})
