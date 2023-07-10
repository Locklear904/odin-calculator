
let firstNum = 0;
let secondNum = 0;
let operator = "";
let result = 0;
let clearNextText = false;
let afterEquals = false;

function operate(a, b, c){
    if (b === "+") {
        return Math.round((a + c) * 10000) / 10000;
    }   else if (b === "-") {
        return Math.round((a - c) * 10000) / 10000;
    }   else if (b === "*") {
        return Math.round((a * c) * 10000) / 10000;
    }   else if (b === "/") {
        if (c !== 0) {
            return Math.round((a / c) * 10000) / 10000;
        } else {
            return NaN;
        }
    }   else {
        return NaN;
    }
    clearNextText = true;
}

let display = document.querySelector('#calcDisplay');
const calcButtons = document.querySelectorAll('.calcBtn');
const calcOpBtns = document.querySelectorAll('.calcOpBtn');
const EqBtn = document.querySelector('#calcEqBtn');
const clrBtn = document.querySelector('#clrBtn');
const backBTn = document.querySelector('#backBtn');

function NumListeners(button){
    button.addEventListener("click", displayText);
}

function OpListeners(button){
    button.addEventListener("click", doOperation);
}

function displayText(){
    if (clearNextText) {
        clearNextText = false;
        display.textContent = "";
    }
    display.textContent += event.target.textContent;
}

function doOperation(){
    if (!firstNum || afterEquals) {
        firstNum = Number(display.textContent);
        display.textContent = "";
        operator = event.target.textContent;
    }   else {
        secondNum = Number(display.textContent);
        display.textContent = "";
        display.textContent = operate(firstNum, operator, secondNum);
        operator = event.target.textContent;
        firstNum = Number(display.textContent);
        display.textContent = "";
    }
}

function equals(){
    secondNum = Number(display.textContent);
    display.textContent = operate(firstNum, operator, secondNum);
    firstNum = Number(display.textContent);
    afterEquals = true;
}

function clear(){
    display.textContent = "";
    firstNum = "";
    secondNum = "";
    operator = "";
}

function backspace() {
    display.textContent = (display.textContent).toString().split('').slice(0, -1).join('');
    Number(display.textContent);
}

backBTn.addEventListener("click", backspace);
clrBtn.addEventListener("click", clear);
EqBtn.addEventListener("click", equals)
calcButtons.forEach(NumListeners);
calcOpBtns.forEach(OpListeners);

//Original simple operation function
/*function doOperation(){
    firstNum = Number(display.textContent);
    display.textContent = "";
    operator = event.target.textContent;
}*/

//first draft
/*function doOperation(){
    if (!firstNum) {
        firstNum = Number(display.textContent);
        display.textContent = "";
        operator = event.target.textContent;
    } else {
        secondNum = Number(display.textContent);
        display.textContent = "";
        operator = event.target.textContent;
        display.textContent = operate(firstNum, operator, secondNum);
        firstNum = Number(display.textContent);
    }
}*/

//first draft
/*function equals(){
    secondNum = Number(display.textContent);
    display.textContent = operate(firstNum, operator, secondNum);
}*/