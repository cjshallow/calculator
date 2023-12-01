const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperationScreen = document.getElementById('previousOperandScreen')
const currentOperandScreen = document.getElementById('currentOperandScreen')


numberButtons.forEach(button => {
   button.addEventListener('click', () => {
      appendNumber(button.textContent)
   })
})

function clear() {

}


function deleteNumber() {


}

function appendNumber(number) {
   currentOperandScreen.textContent += number
}

function chooseOperation(operation) {

}


function compute() {

}

function updateDisplay() {
}


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

