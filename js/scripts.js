
var pingPonger = function (number) {

  var name = [];

  for (var index=1; index<= number; index++){

    if ((index %3 === 0) && (index %15 !== 0)) {
      name.push("Ping")
    }
    else if ((index %5 === 0 ) && (index %15 !==0)) {
      name.push("Pong")
    }
    else if (index %15 === 0) {
      name.push("Ping-Pong")
    }
    else{
      name.push(index)
    }
  }
  console.log(name)
  return name
}



$(function() {
    $("form").submit(function(event){
      event.preventDefault();
      var userInput= parseInt($("#numberInput").val())
      var result = pingPonger(userInput);
    $("#returnSection").text(result)
  });
});
