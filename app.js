const operators = document.querySelectorAll('.operator');
const numbers = document.querySelectorAll('.number');
const operatorPara = document.querySelector('.operatorPara');

let numberOneArray = [];
let numberTwoArray = [];
let numberOne = 0;
let numberTwo = 0;
let operatorValue = '';
let isOperatorSelected = false;

// Get numbers
for (let e of numbers) {
    e.addEventListener('click', () => {
        if (!isOperatorSelected) { 
            numberOneArray.push(e.dataset.number);
            numberOne = Number(numberOneArray.join(''));
            operatorPara.textContent = `${numberOne} ${operatorValue}`;
            console.log('Número 1:', numberOne);
        } else {
            numberTwoArray.push(e.dataset.number);
            numberTwo = Number(numberTwoArray.join(''));
            operatorPara.textContent = `${numberOne} ${operatorValue} ${numberTwo}`;
            console.log('Número 2:', numberTwo);
        }
    });
}

// Get operator
for (let e of operators) {
    e.addEventListener('click', () => {
        if (numberOneArray.length > 0 && !isOperatorSelected) { 
            operatorValue = e.dataset.operator;
            isOperatorSelected = true;
            operatorPara.textContent = `${numberOne} ${operatorValue}`;
            console.log('Operador:', operatorValue);
        }
        else if( isOperatorSelected){
            operatorValue = e.dataset.operator;
            operatorPara.textContent = `${numberOne} ${operatorValue} ${numberTwo}`;
            console.log('Operador:', operatorValue);
        }
    });
}

// addition function
const addition = function(){
    result = numberOne + numberTwo;
}
// subtraction function
 const subtraction = function(){
    result = numberOne - numberTwo;
 }
// division function
const division = function(){
    result = numberOne / numberTwo;
}
// multiplication function
const multiplication = function(){
    result = numberOne * numberTwo;
}