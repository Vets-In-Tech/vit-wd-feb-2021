// function func(){
//     var get = document.getElementById("Text");
//     var response= get.innerText;
// }

//event that triggers
//grab what the person typed

function func(){
    console.log("button click"); //to check that the button works
    var get = document.getElementById("Text");
    var whatWasTyped = get.value;
    var nu = document.createElement('li');
    nu.innerText = whatWasTyped;
    var listEl = document.getElementById("list");
    get.appendChild(nu);
}
