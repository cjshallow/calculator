

// Psuedo Code // 

// Create function so that when the Equals Button is clicked, the 
// operate function runs with the two numbers input into the display
// and prints the solution into the display

// store the first number, then the operator, then the second number into variables
// make those variables the arguments of the operate function
// run the operate function when equals is clicked 
// add something to the operate function to print the result into the display



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

