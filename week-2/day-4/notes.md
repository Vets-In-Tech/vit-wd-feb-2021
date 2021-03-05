2 ways to utilize JS with HTML (and CSS)
answer: script

pay attention to the order!

External JS File :: script.js
can use multiple javascript files in a single HTML

//FUNCTIONS

syntax

function nameOfYourFunc(){
// do something
} one of the ways we declare a funtion in JS

utilization of the function

1.declaration
2.invocation

The Event Elements - HTML
-form
-button
-input

single = sign is the assignment operator.
What is the difference between a single = and a ==?

= used to the set the data of a variable

variable is an allocation for memory.
variable is declared with var keyword.
var nameItAnything = 1;
var anotherThing = 1;

funtion changeTitleToNumber() {
var title = document.getElementById("grabMe");
title.innerText = nameItAnything;
}
changeTitletoNumber();

// is 1 == 1? yes
// is nameItAnything == 1? yes
// is nameItAnything == 2? no
// is anotherThing == nameItAnything? yes
The only difference between == and === is that == only compares the value of the given variable
=== will copare the given value and the data-type of the provided variables
generally - == only compares value
=== compares value AND data type
10 == 10 // true
10 === ten // false

Events Feature

1. Listeners
2. Handlers

can assign event listeners to html elements
the button by default has a 'click' event listener

the event listeners are tied to the html element.
