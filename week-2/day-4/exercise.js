function decrement() {
  // access the DOM element associated with the h1
  var h1Element = document.getElementById("grabMe");
  var numberText = Number(h1Element.innerText);
  console.log(numberText);
  if (numberText > 0) {
    numberText--;
  }
  h1Element.innerText = numberText;
}

function increment() {
  // write code here
  var h1Element = document.getElementById("grabMe");
  var numberText = Number(h1Element.innerText);
  console.log(numberText);
  if (numberText < 10) {
    numberText++;
  }
  h1Element.innerText = numberText;
}

// Done early? Try to add a blocker that doesnt go below 0 and above 10!

function randomize() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var myRandomNumbers = "rgb(" + x + "," + y + "," + z + ")";
  document.body.style.background = myRandomNumbers;
}
