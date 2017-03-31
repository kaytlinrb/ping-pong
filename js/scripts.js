//
// var pingPongMachine = function(number) {
//   var input = userInput
// }





$(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("#numberInput").val())
    // var result = pingPongMachine(userInput);
    $("#returnSection").append("<li>" + userInput + "</li>")
  });

});
