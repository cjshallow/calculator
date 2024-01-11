
let previousValue = "";
let currentValue = "";
let currentOperation = "";


const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const equalsButton = document.getElementById('equals-btn')
const clearButton = document.getElementById('clear-btn')
const deleteButton = document.getElementById('delete-btn')
const decimalButton = document.getElementById('decimal-btn')
const previousOperationScreen = document.getElementById('previous-input-text')
const currentOperationScreen = document.getElementById('current-input-text')

equalsButton.addEventListener('click', compute)
clearButton.addEventListener('click', clear)
deleteButton.addEventListener('click', deleteValue)
decimalButton.addEventListener('click', appendDecimal)

function compute(){

}

function clear(){

}

function deleteValue() {

}

function appendDecimal() {

}


numberButtons.forEach((button) =>
  button.addEventListener('click', () => appendNumber(button.textContent))
)

function appendNumber(number) {
    currentOperationScreen.textContent += number
}