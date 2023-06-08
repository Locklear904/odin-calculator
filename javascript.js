function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

let firstNum
let secondNum
let operator

function operate(a, b, c){
    if (b === `+`) {
        add(a, c);
    }   else if (b === `-`) {
        subtract(a, c);
    }   else if (b === `*`) {
        multiply(a, c);
    }   else if (b === `/`){
        divide(a, c);
    }   else {
        alert("Please try again!");
    }
}

const display = document.querySelector('#calcDisplay');

function displayText(){

}