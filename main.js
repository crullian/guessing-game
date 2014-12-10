$(document).ready(function() {

  var theNumber = Math.floor(Math.random() * 100) + 1; // create random number
  console.log("The number is " + theNumber);
  var message = "";
  var numberOfGuesses = 5;
  var guessList = [];

  $(".guessesLeft").text(5);

  $("#userInput").keydown(function(event) { // Press enter to submit guess
    if (event.keyCode == 13) {
      $(".submit").trigger("click");
    }
  });

  $("#buttons").on("click", ".submit", function(event) { // click to submit guess
    var userInput = +$("#userInput").val(); // get user input value, change to number
    guessList.push(userInput);
    console.log(guessList);

    if (userInput != Math.floor(userInput) || userInput == "") { // if not an integer, or no input
      guessList.pop();
      message = "Please submit an integer!";

    } else if (userInput === theNumber) {

      message = "Correct!";

    } else if (userInput < theNumber) {

      message = "Guess higher"

    } else if (userInput > theNumber) {

      message = "Guess lower"

    }

    $(".guessesLeft").text(numberOfGuesses - guessList.length);

    if (guessList.length === numberOfGuesses) {
      message = "Game over, play again!";
      $(".status").text(message).slideDown();
      return;
    }

    $(".status").text(message).slideDown().fadeOut(3000); // create mmessage to user

    $("#userInput").val(""); // clear input field

    event.preventDefault();

  });

  $("#buttons").on("click", ".hint", function() {
    $(".status").text("the number is " + theNumber).slideDown().fadeOut(2000);
  });

  function resetGame() {
    theNumber = Math.floor(Math.random() * 100) + 1;
    console.log("The number is " + theNumber);
    message = "You started a new game!";
    numberOfGuesses = 5;
    guessList = [];
    $("#userInput").val("");
    $(".guessesLeft").text(5);
    $(".status").text(message).slideDown().fadeOut(3000);
  }

  $("#buttons").on("click", ".again", function() {
    return resetGame();
  });


});