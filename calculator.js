const addFunc = (a,b) => a + b;
const subtractFunc = (a,b) => a - b;
const multiplyFunc = (a,b) => a * b;
const divideFunc = (a,b) => a / b;

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
    }
}

function calculate(){
    secondNum = Number(currentInput);
    const result = operate(firstNum, secondNum, op);
    firstNum = null;
    secondNum = null;
    op = null;
    currentInput = result.toString();
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

numbers.forEach(button => {
    button.addEventListener("click", () =>{
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
    if(op !== null && secondNum === null){
        calculate();
    }

    if(op !== null && secondNum !== null){
        return;
    }

    firstNum = Number(currentInput);
    op = button.value;
    display.textContent += button.value;
    currentInput = "";
    })
})

equalButton.addEventListener("click", () => calculate());

clearButton.addEventListener("click", () => {
    display.textContent = "0";
    firstNum = null;
    secondNum = null;
    op = null;
    currentInput = null;
})

backspace.addEventListener("click", () =>{
    if(currentInput !== "") {
        currentInput = currentInput.slice(0,-1);
        display.textContent = currentInput || "0";
    }
})