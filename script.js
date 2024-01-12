
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
  button.addEventListener('click', function() {
    appendNumber(button.textContent)
  })
)

operatorButtons.forEach((button) =>
  button.addEventListener('click', function(){
    setOperator(button.textContent)
  })
)

function appendNumber(number) {
    currentOperationScreen.textContent += number
}

function setOperator(operator){
  if (currentOperation !== null) operate()
  currentValue = currentOperationScreen.textContent
  currentOperation = operator
  previousOperationScreen.textContent = `${currentValue} ${operator}`
  currentOperationScreen.textContent = ""
}




function operate(){
    b = currentOperationScreen.textContent
    a = currentValue
    if (previousOperationScreen.textContent.includes("=")) return
    if (previousOperationScreen.textContent.includes("+")){
      solution = Number(a) + Number(b)
      currentOperationScreen.textContent = roundSolution(solution)
      previousOperationScreen.textContent = `${currentValue} ${"+"} ${Number(b)} ${"="}`
    } else if (previousOperationScreen.textContent.includes("-")){
      solution = Number(a) - Number(b)
      currentOperationScreen.textContent = roundSolution(solution)
      previousOperationScreen.textContent = `${currentValue} ${"-"} ${Number(b)} ${"="}`
    } else if (previousOperationScreen.textContent.includes("*")){
      solution = Number(a) * Number(b)
      currentOperationScreen.textContent = roundSolution(solution) 
      previousOperationScreen.textContent = `${currentValue} ${"*"} ${Number(b)} ${"="}`
    } else if (previousOperationScreen.textContent.includes("÷")){
      solution = Number(a) / Number(b)
      if (solution === Infinity) {
        alert("You can't divide by 0")
      } else {
      currentOperationScreen.textContent = roundSolution(solution) 
      previousOperationScreen.textContent = `${currentValue} ${"÷"} ${Number(b)} ${"="}`
      } 
    }
  }


  function roundSolution(num){
    return Math.round(num*1000)/1000
  }