var userInput = parseInt($("#numberInput").val())
var operations = [userInput%3]
var resultArray = []

var pingPongMachine = function(number) {

  for (var index=0; index < operations.length; index ++){
    if (operations.splice(0) === 0){
      resultArray.push("Ping")
      console.log(resultArray)
    };
  };
};





$(function(){
  $("form").submit(function(event){
    event.preventDefault();

    if("#numberInput"===0){
      alert("please enter a number other than zero")
    }
    var result = pingPongMachine(userInput);
    $("#returnSection").append("<li>" + resultArray + "</li>")
  });

});
