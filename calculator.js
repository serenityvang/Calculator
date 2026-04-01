const addFunc = (a,b) => a + b;
const subtractFunc = (a,b) => a - b;
const multiplyFunc = (a,b) => a * b;
const divideFunc = (a,b) => b === 0 ? "You cannot divide by 0!" : a / b;
const moduloFunc = (a,b) => b === 0 ? "Cannot modulo by 0" : a % b;

function operate(a, b, op){
    switch (op){
        case "+":
            return addFunc(a,b);
        case "-":
            return subtractFunc(a,b);
        case "x":
            return multiplyFunc(a,b);
        case "/":
            return divideFunc(a,b);
        case "%":
            return moduloFunc(a,b);
    }
}

function calculate(){
    secondNum = Number(currentInput);
    const result = operate(firstNum, secondNum, op);

    firstNum = result;
    secondNum = null;
    op = null;
    currentInput = result.toString();
    justCalculated = true;
    display.textContent = currentInput;
}

const numbers = document.querySelectorAll(".num-button");
const operators = document.querySelectorAll(".op-button");
const equalButton = document.querySelector("#equal-button");
const clearButton = document.querySelector("#clear-button");
const negationButton = document.querySelector("#negation-button");
const percentButton = document.querySelector("#percent-button");
const backspace = document.querySelector("#back-button");
const display = document.querySelector("#display-content");

let firstNum = null;
let secondNum = null;
let op = null;
let currentInput = "";
display.textContent = "0";
let justCalculated = false;

numbers.forEach(button => {
    button.addEventListener("click", () =>{

        if(justCalculated){
            currentInput = "";
            display.textContent = "";
            firstNum = null;
            secondNum = null;
            op = null;
            justCalculated = false;
        }

        if(display.textContent === "0" && button.value !== "."){
            display.textContent = "";
        }

        if(button.value === "." && currentInput.includes(".")){
            return;
        }

        if(display.textContent.length === 8 && op !== null){
            return;
        }
        
        currentInput += button.value;
        display.textContent = currentInput;
    });
})

operators.forEach(button => {
    button.addEventListener("click", () =>{
    if(justCalculated){
        op = button.value;
        justCalculated = false;
        currentInput = "";
        return;
    }

    if(currentInput === ""){
        op = button.value;
        return;
    }

    if(firstNum !== null && op !== null){
        calculate();
    } else {
        firstNum = Number(currentInput);
    }

    op = button.value;
    currentInput = "";

    display.textContent = `${firstNum} ${op} ${currentInput}`;
    });
})

equalButton.addEventListener("click", () => calculate());

clearButton.addEventListener("click", () => {
    display.textContent = "0";
    firstNum = null;
    secondNum = null;
    op = null;
    currentInput = "";
})

backspace.addEventListener("click", () =>{
    if(currentInput !== "") {
        currentInput = currentInput.slice(0,-1);
        display.textContent = currentInput || "0";
    }
})

negationButton.addEventListener("click", () => {
    if(currentInput.includes("-")) {
        currentInput = currentInput.slice(1);
        display.textContent = currentInput;
    } else {
        currentInput = "-" + currentInput;
        display.textContent = currentInput;
    }
})