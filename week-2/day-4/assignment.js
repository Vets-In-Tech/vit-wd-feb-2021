var slyde = 0;  
    display(slyde); 

function display(n) {  
    var i;  
    var slides = document.getElementsByClassName("image");  
    if (n > slides.length) {slyde = 1 }  
    if (n < 1) { slyde = slides.length }  
    for (i = 0; i < slides.length; i++) {slides[i].style.display = "none";}  
    slides[slyde - 1].style.display = "block";  
}  

function show(n) {  
    display(slyde = n);  
}   
function change(n) {  
    display(slyde += n);  
}  

