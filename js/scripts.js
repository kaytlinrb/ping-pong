
// var operations = [userInput%3]
// var resultArray = []
//
// var pingPongMachine = function(number) {
//
//   for (var index=0; index < operations.length; index ++){
//     if (operations.splice(0) === 0){
//       resultArray.push("Ping")
//       console.log(resultArray)
//     };
//   };
// };
var result = 0
var pingPongMachine = function(number) {
for (var index=0; index<2; index++)
  if (userInput % 3 === 0) {
    result = "ping";
    return result;

  }
}

$(function(){
  $("#pingPongForm").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("#numberInput").val())

    if (userInput ===0){
      alert("please enter a number other than zero")
    }

    // var result = pingPongMachine(userInput);
    $("#returnSection").append("<li>" + result + "</li>")
  });
});
