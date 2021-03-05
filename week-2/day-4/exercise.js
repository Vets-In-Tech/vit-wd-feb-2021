function decrement() {
  var h1Element = document.getElementById("grabMe");
  var numberText = Number(h1Element.innerText);
  if (numberText > 0){
    numberText--;
  }
  h1Element.innerText = numberText;
}

function increment() {
  var h1Element = document.getElementById("grabMe");
  var numberText = Number(h1Element.innerText);
  if (numberText < 10){
    numberText++;
  }
  // numberText !< 0;
  h1Element.innerText = numberText;
}

// Done early? Try to add a blocker that doesnt go below 0 and above 10!

function randomize() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  document.body.style.background = bgColor;
}
