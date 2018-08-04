// declear a variable of welcomePrompt with a prompt and a string of Welcome to the sandwich shop, what do i call you ?

var welcomePrompt = prompt("Please enter your name:");

// then alert with a string of a variable of hello and the varible of welcomePrompt

alert("Hello " + welcomePrompt);

// declear a variable with a confirm and a string of are you here for a sandwich ?

var question = confirm("Are you here for a sandwich?");

// if question is equal to true

if (question == true) {

    // prompt the user with a string of What kind of sandwich would you like ?

    var foodPrompt = prompt("What kind of sandwich would you like?");

    // then write on the page with the variable welceomPrompt and a string of please wait 10 min for your with another variable of foodPrompt

    document.write("Thank you, " + welcomePrompt + " please wait 10 min for your " + foodPrompt + " sandwich.");

} 

    // question isn't true write on the page with a string of if you dont want a sandwich what are you here for !

else {
    document.write("If you're nt here for a sandwich then what are you here for?");
}