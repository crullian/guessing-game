$(document).ready(function() {

  "use strict";

  var theNumber = Math.floor(Math.random() * 100) + 1; // create random number
  // var message = "";
  var numberOfGuesses = 5;
  var guessList = [];
  var interval;

  console.log("The number is " + theNumber);

  $(".guessesLeft").text(numberOfGuesses + " guesses");

  $("#userInput").keydown(function(event) { // Press enter to submit guess
    if (event.keyCode == 13) {
      $(".submit").trigger("click");
    }
  });

  $("#buttons").on("click", ".submit", function(event) { // click to submit guess
    var userInput = +$("#userInput").val(); // get user input value, change to number input type = number

    if (guessList.indexOf(userInput) != -1) {
      // message = "You've already guessed that, try again";
      $(".status").text("You've already guessed that, try again").slideDown().fadeOut(3000);
      $("#userInput").val("");
      return;
    } else {
      guessList.push(userInput);
      console.log(guessList);
    }

    if (userInput != Math.floor(userInput) || userInput === 0) { // if not an integer, or no input
      guessList.pop();
      // message = "Please submit an integer!";
      $(".status").text("Please submit an integer!").slideDown().fadeOut(3000);


    } else if (userInput < theNumber) {

      //message = "Guess higher"
      if ((theNumber - userInput) >= 50) {
        // message = "You're ice cold, guess higher";
        $(".status").text("You're ice cold, guess higher").slideDown().fadeOut(3000);
      } else if ((theNumber - userInput) < 49 && (theNumber - userInput) > 20) {
        // message = "You're cold, guess higher";
        $(".status").text("You're cold, guess higher").slideDown().fadeOut(3000);
      } else if ((theNumber - userInput) <= 20 && (theNumber - userInput) > 10) {
        // message = "You're warm, guess higher";
        $(".status").text("You're warm, guess higher").slideDown().fadeOut(3000);
      } else if ((theNumber - userInput) <= 10 && (theNumber - userInput) > 4) {
        // message = "You're hot, guess higher";
        $(".status").text("You're hot, guess higher").slideDown().fadeOut(3000);
      } else if ((theNumber - userInput) <= 4 && (theNumber - userInput) >= 1) {
        // message = "You're red hot, guess higher";
        $(".status").text("You're red hot, guess higher!").slideDown().fadeOut(3000);
      }

      // $(".status").text(message).slideDown().fadeOut(3000);

    } else if (userInput > theNumber) {


      if ((userInput - theNumber) >= 50) {
        // message = "You're ice cold, guess lower";
        $(".status").text("You're ice cold, guess lower").slideDown().fadeOut(3000);
      } else if ((userInput - theNumber) < 49 && (userInput - theNumber) > 20) {
        // message = "You're cold, guess lower";
        $(".status").text("You're cold, guess lower").slideDown().fadeOut(3000);
      } else if ((userInput - theNumber) <= 20 && (userInput - theNumber) > 10) {
        // message = "Getting warm, guess lower";
        $(".status").text("Getting warm, guess lower").slideDown().fadeOut(3000);
      } else if ((userInput - theNumber) <= 10 && (userInput - theNumber) > 4) {
        // message = "You're hot, guess lower";
        $(".status").text("You're hot, guess lower").slideDown().fadeOut(3000);
      } else if ((userInput - theNumber) <= 4 && (userInput - theNumber) >= 1) {
        // message = "You're red hot, guess lower";
        $(".status").text("You're red hot, guess lower!").slideDown().fadeOut(3000);
      }

      // $(".status").text(message).slideDown().fadeOut(3000);

    } else if (userInput === theNumber) {
      $(".status").text("Correct, Woo Hoo! Play Again!").slideDown().fadeOut(3000);
      interval = setInterval(function() {
        $(".status").toggleClass("blinking");
      }, 200);
      $(".submit").on('click', function() {
        $(this).prop("disabled", true);
      });
      $(".guessList").text(guessList.join(", "));
    }

    if (guessList.length === numberOfGuesses && userInput !== theNumber) { // when a user reaches the allowed  number of guesses
      // message = "Game over, play again!";
      $(".status").text("Game over, play again!").slideDown();
      //$("#userInput").val("");
      $(".submit").on('click', function() {
        $(this).prop("disabled", true);
      });

    }

    if (guessList.length === numberOfGuesses - 1) { // let the user know how many guesses are left
      $(".guessesLeft").text((numberOfGuesses - guessList.length) + " guess left");
    } else {

      $(".guessesLeft").text((numberOfGuesses - guessList.length) + " guesses left");
    }

    // $(".status").text(message).slideDown().fadeOut(3000); // create message to user

    $(".guessList").text("You've guessed [" + guessList.join(", ") + "]");

    $("#userInput").val(""); // clear input field

    event.preventDefault();

  });

  $("#buttons").on("click", ".hint", function() {
    $(".status").text("the number is " + theNumber).slideDown().fadeOut(2000);

  });

  function resetGame() {
    theNumber = Math.floor(Math.random() * 100) + 1;
    console.log("The number is " + theNumber);
    numberOfGuesses = 5;
    guessList = [];
    clearInterval(interval); // resets to not blinking
    // $(".blinking").toggleClass("status"); // resets the text shadow
    $("h2").removeClass("blinking");
    $(".guessList").text(guessList.join(", "));
    $("#userInput").val("");
    $(".guessesLeft").text(numberOfGuesses + " guesses");
    $(".status").text("You started a new game!").slideDown().fadeOut(3000);
    $(".submit").on("click", function() {
      $(this).prop("disabled", false); // re-enables buttons
    });
  }

  $("#buttons").on("click", ".again", function() {
    resetGame();
  });

});



// end