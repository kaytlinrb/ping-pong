
var pingPonger = function (number) {
  var name = "";
  for (var index=0; index<1; index++){
  if ((number %3 === 0) && (number %15 !== 0)) {
    name ="Ping"
  }
  else if ((number %5 === 0 ) && (number %15 !==0)) {
    name = "Pong"
  }
  else if (number %15 === 0) {
    name="Ping-Pong"
  }
  else{
    name=number
  }
  return name;
}
}



$(function() {
    $("form").submit(function(event){
      event.preventDefault();
      var userInput= parseInt($("#numberInput").val())
      var result = pingPonger(userInput);
    $("#returnSection").prepend('<li class="result">' + result + '</li>')
  });
});
