
var pingPonger = function (number) {
  var name = "";
  for (var index=0; index<1; index++){
  if (number %3 === 0 ) {
    name ="ping"
  }
  else if (number %5 === 0 ) {
    name = "pong"
  }
  return name;
}
}


$(function() {
    $("form").submit(function(event){
      event.preventDefault();
      var userInput= parseInt($("#numberInput").val())
      var result = pingPonger(userInput);
    $("#returnSection").append("<li>" + result + "</li>")
  });
});
