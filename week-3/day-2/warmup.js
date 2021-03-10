//Using native-DOM methods we JavaScript
//we can store HTML elements in JavaScript variab
var buttons = document.querySelectorAll('.number')
var clearButton = document.getElementById('clear')
var equalsButton = document.getElementById('equals')
var display = document.getElementById('display')

//add an eventListener to each of the buttons
buttons.forEach(button => {
  button.addEventListener('click', () => { 
    var buttonValue = button.getAttribute('data-num');  
    display.textContent += buttonValue;
  })
})

equalsButton.addEventListener('click', () => { 
  display.textContent = eval(display.textContent)
})

clearButton.addEventListener('click', () => { 
  display.textContent = ""
})

display.textContent = "Yummy Math"