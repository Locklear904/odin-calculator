
let firstNum = ""
let secondNum = ""
let operator = ""

function operate(a, b, c){
    if (b == "+") {
        return a + c;
    }   else if (b == "-") {
        return a - c;
    }   else if (b == "x") {
        return a * c;
    }   else if (b == "/"){
        return a / c;
    }   else {
        alert("Please try again!");
    }
}

let display = document.querySelector('#calcDisplay');
const calcButtons = document.querySelectorAll('.calcBtn');
const calcOpBtns = document.querySelectorAll('.calcOpBtn');
const EqBtn = document.querySelector('#calcEqBtn');
const clrBtn = document.querySelector('#clrBtn');

function NumListeners(button){
    button.addEventListener("click", displayText);
}

function OpListeners(button){
    button.addEventListener("click", displayOperator);
}

function displayText(){
    display.textContent += event.target.textContent;
}

function displayOperator(){
    firstNum = Number(display.textContent);
    display.textContent = "";
    operator = event.target.textContent;
}

function equals(){
    secondNum = Number(display.textContent);
    display.textContent = operate(firstNum, operator, secondNum);
}

function clear(){
    display.textContent = "";
    firstNum = "";
    secondNum = "";
    operator = "";
}

clrBtn.addEventListener("click", clear);
EqBtn.addEventListener("click", equals)
calcButtons.forEach(NumListeners);
calcOpBtns.forEach(OpListeners);

