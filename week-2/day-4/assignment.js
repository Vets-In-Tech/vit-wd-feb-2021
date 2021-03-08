// if you're seeing this, it's because I am still figuring out the java portion

function decrement() {
    var h1Element = document.getElementById("grabMe");
    var numberText = Number(h1Element.innerText);
    numberText--;
    h1Element.innerText = numberText;
  }
  
  function increment() {
    var h1Element = document.getElementById("grabMe");
    var numberText = Number(h1Element.innerText);
    numberText++;
    h1Element.innerText = numberText;
  }