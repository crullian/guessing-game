$(document).ready(function() {
  var theNumber = Math.floor(Math.random() * 100) + 1;

  console.log("The number is " + theNumber);

  var message = "";

  $('#userInput').keydown(function(event) {
    if (event.keyCode == 13) {
      $('.submit').trigger('click');
    }
  });

  $("#buttons").on("click", ".submit", function(event) {
    var userInput = +$("#userInput").val();

    if (userInput != Math.floor(userInput) || userInput == "") {
      message = "Please submit an integer!";

    } else if (userInput === theNumber) {

      message = "Correct!";
    } else {
      message = "Wrong, try again!"
    }

    $(".status").text(message).slideDown().fadeOut(2000);


    event.preventDefault();
  });
  $("#buttons").on("click", ".hint", function() {
    $(".status").text("the number is " + theNumber).slideDown().fadeOut(2000);
  })
});