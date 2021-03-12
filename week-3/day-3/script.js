//var takes the userInput
//var userInput * 15%
// function userInput * 15%
// var tipAmount = userInput * 15%
// result of tipAmount to <h1></h1>
function tipAmount() {
    var userInput = document.getElementById("billTotal");
    var tipAmount = userInput.value * Number(.15);
    var tipTotal = document.getElementById("total");
    tipTotal.parentNode.append(tipAmount)
}
