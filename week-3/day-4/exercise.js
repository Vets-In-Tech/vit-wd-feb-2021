function calculateTip() {
  var billAmountValue = document.getElementById("billAmount").nodeValue;
  var tipAmount = billAmountValue * 0.15;
  var outputElement = document.getElementById("output");
  outputElement.innerText = tipAmount;
}
