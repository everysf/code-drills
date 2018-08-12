// Day 01
// Acitivity 03


console.log("==================== Question 01 ====================");
// Create a timer that creates an alert that says "Question 1" after 5 seconds

var timer;
var time;
function startTimer() {
    time = 5;
    timer = setInterval(runTimer, 1000)
}
function runTimer() {
    time -= 1
    console.log(time)
    if (time <= 0) {
        alert("Question 1")
        clearInterval(timer)
    }
}
startTimer()

console.log("==================== Question 02 ====================");
// Create a timer that creates an alert that says "Question 2" after 15 seconds

// function startTimer15() {
//     time15 = 15;
//     timer15 = setInterval(runTimer15, 1000)
// }
// function runTimer15() {
//     time15 -= 1
//     console.log(time15)
//     if (time15 <= 0) {
//         alert("Question 2")
//         clearInterval(timer15)
//     }
// }
// startTimer15()

// Remove the timer you just made for Question 2

console.log("==================== Question 03 ====================");
// Create a timer that creates an alert that says "Question 3 part 1" after 15 seconds

// function startTimer15() {
//     time15 = 15;
//     timer15 = setInterval(runTimer15, 1000)
// }
// function runTimer15() {
//     time15 -= 1
//     console.log(time15)
//     if (time15 <= 0) {
//         alert("Question 3 part 1")
//         clearInterval(timer15)
//     }
// }
// startTimer15()

// Create a timer that creates an alert that says "Question 3 part 2" after 16 seconds

function startTimer16() {
    time16 = 16;
    timer16 = setInterval(runTimer16, 1000)
}
function runTimer16() {
    time16 -= 1
    console.log(time16)
    if (time16 <= 0) {
        alert("Question 3 part 2")
        clearInterval(timer16)
    }
}
startTimer16()

console.log("==================== Question 04 ====================");
// Remove the timer from Question 3 part 1



console.log("==================== Question 05 ====================");
// Create a timer that plays a sound after 11 seconds and console logs "Question 5 Completed!"

function startTimer11() {
    time11 = 11;
    timer11 = setInterval(runTimer11, 1000)
}
function runTimer11() {
    time11 -= 1
    console.log(time11)
    if (time11 <= 0) {
        alert("Question 5 completed")
        // var audio = new Audio('')
        // audio.play()
        clearInterval(timer11)
    }
}
startTimer11()
