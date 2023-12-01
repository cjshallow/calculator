



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

