




$(function() {
  $("form").submit(function(event){
    event.preventDefault();
    var userInput= parseInt($("#numberInput").val())
  $("#returnSection").append("<li>" + userInput + "</li>")
  })
})
