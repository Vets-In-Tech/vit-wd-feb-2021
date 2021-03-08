var counter = 0;

function moveBack() {
    if (counter > 0) {
      counter --;
      document.getElementById("imgSlider2").style.transform='translateX(-'+253*counter+'px)';
      console.log(counter);
    }
  }
function moveForward() {
  if (counter < 13) {
    counter ++;
    document.getElementById("imgSlider2").style.transform='translateX(-'+253*counter+'px)';
    console.log(counter);
    }
  }
