
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

equalsButton.addEventListener('click', operate)
clearButton.addEventListener('click', clear)
deleteButton.addEventListener('click', deleteValue)
decimalButton.addEventListener('click', appendDecimal)


function clear(){
  currentOperationScreen.textContent = ""
  previousOperationScreen.textContent = ""

}

function deleteValue() {
  currentOperationScreen.textContent = currentOperationScreen.textContent.toString().slice(0,-1)
}

function appendDecimal() {
  if (currentOperationScreen.textContent.includes(".")) return
 currentOperationScreen.textContent += "."
}


numberButtons.forEach((button) =>
  button.addEventListener('click', () => appendNumber(button.textContent))
)

operatorButtons.forEach((button) =>
  button.addEventListener('click', () => setOperator(button.textContent))
)

function appendNumber(number) {
    currentOperationScreen.textContent += number
}

function setOperator(operator){
  currentValue = currentOperationScreen.textContent
  currentOperation = operator
  previousOperationScreen.textContent = `${currentValue} ${operator}`
  currentOperationScreen.textContent = ""
}



const add = function(a,b) {
  return a + b 
	
};

const subtract = function(a,b) {
  return a - b 
	
};

const sum = function(array) {
  if(array.length === 0) {
    return 0
  } else {
    let arrSum = array.reduce((sum, current) => sum + current);
    return arrSum;
  }
};

const multiply = function(a,b) {
  return a*b 
  
};

const divide =  function(a,b) {
  if (b === 0) {
    return "ERROR";
  } else {
    return a / b
  };

}

function operate(){
    b = currentOperationScreen.textContent
    a = currentValue
    if (previousOperationScreen.textContent.includes("+")){
      solution = Number(a) + Number(b)
      currentOperationScreen.textContent = solution 
      previousOperationScreen.textContent = ""
    } else if (previousOperationScreen.textContent.includes("-")){
      solution = Number(a) - Number(b)
      currentOperationScreen.textContent = solution 
      previousOperationScreen.textContent = ""
    } else if (previousOperationScreen.textContent.includes("*")){
      solution = Number(a) * Number(b)
      currentOperationScreen.textContent = solution 
      previousOperationScreen.textContent = ""
    } else if (previousOperationScreen.textContent.includes("÷")){
      solution = Number(a) / Number(b)
      if (solution === Infinity) {
        return
      } else {
      currentOperationScreen.textContent = solution 
      previousOperationScreen.textContent = "" 
      } 
    }
  }