var theNumber = Math.floor(Math.random() * 100) + 1;
alert(theNumber);


$(document).ready(function() {
  // alert($(".submit").length);
  //$("input").hide().show("slow");

  $("#buttons").on("click", ".submit", function() {
    $(".status").slideToggle();
  })

});