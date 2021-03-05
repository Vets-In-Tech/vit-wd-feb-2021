var imgIndex = 1
showImg(imgIndex);

function moveBack() {
    var carouse = document.getElementById("imgSlider");
    var previous = document.getElementById("previous");
    currentImg = previous -1;
  
  
}
function moveForward() {
    var carousel = document.getElementById("imgSlider");
  var next = document.getElementById("next");
  next = currentImg +1;
  carousel[currentImg].className = "img shown"
}
