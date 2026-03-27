const addFunction = (a, b) => a + b;
const subtractionFunction = (a, b) => a - b;
const multiplyFunction = (a, b) => a * b;
const divideFunction = (a, b) => a / b;


function operate(a, b, op){
    switch(op){
        case "+":
            return addFunction(a,b);
            break;
        case "-":
            return subtractionFunction(a,b);
            break;
        case "*":
            return multiplyFunction(a,b);
            break;
        case "/":
            return divideFunction(a,b);
            break;
    }
}

const numbers = document.querySelectorAll(".number-button");
const operators = document.querySelectorAll(".op-buttons");
const equalButton = document.querySelector("#equal-button");
const clearButton = document.querySelector(:#clear-button");