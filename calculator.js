const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operation]')
//const equalsButton = getElementById('equalsBtn')
//const clearButton = getElementById('clearBtn')
//const decimalButton = getElementById('decimalBtn')



//numberButtons.forEach((button) => 
//  button.addEventListener('click', () => appendNumber(button.textContent))
//  )

//operatorButtons.forEach((button) => 
//  button.addEventListener('click', () => setOperation(button.textContent))
//  )

// Psuedo Code // 

// Create function so that when the Equals Button is clicked, the 
// operate function runs with the two numbers inputting into the text field //



const add = function(a,b) {
    return a + b 
  };
  
  const subtract = function(a,b) {
    return a - b   
  };

 const multiply = function(a,b) {
    return a * b
 };

 const divide = function(a,b) {
    return a / b
};

 const operate = function(a, operation, b) {

    if (operation === '+') return add(a,b); 
    if (operation === '-') return subtract(a,b); 
    if (operation === '*') return multiply(a,b); 
    if (operation === '/') return b === 0 ? "ERROR" : divide(a,b);
    if (operation === '') return "No operation selected";

};

