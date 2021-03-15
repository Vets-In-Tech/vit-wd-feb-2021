
//Release button clears text area
function eraseText() {
  document.getElementById("clear").value= "";
}

// Exploring different tabs within the same page
function tab(name){
    var i;
    var x = document.getElementsByClassName("tabz");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(name).style.display = "block";
}

//Listing people's social media handles 
function func(){
    var get = document.getElementById("socialHandle");
    var whatWasTyped = get.value;
    var nyou = document.createElement('li');
    nyou.innerText = whatWasTyped;
    var listEl = document.getElementById("soList");
    listEl.appendChild(nyou);
}

  