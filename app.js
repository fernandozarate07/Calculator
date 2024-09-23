const operators = document.querySelectorAll('.operator');
const numbers = document.querySelectorAll('.number');
const operatorPara = document.querySelector('.operatorPara');
const resultPara = document.querySelector('.resultPara');
const buttonEqual = document.querySelector('.buttonEqual');
const buttonPoint = document.querySelector('.buttonPoint');
const clear = document.querySelector('.clear');

let numberOneArray = [];
let numberTwoArray = [];
let numberOne = 0;
let numberTwo = 0;
let operatorValue = '';
let isOperatorSelected = false;

for (let e of numbers) {
    e.addEventListener('click', () => {
        if (!isOperatorSelected) { 
            numberOneArray.push(e.dataset.number);
            numberOne = Number(numberOneArray.join(''));
            operatorPara.textContent = `${numberOne}`;
            console.log('Número 1:', numberOne);
        } else {
            numberTwoArray.push(e.dataset.number);
            numberTwo = Number(numberTwoArray.join(''));
            operatorPara.textContent = `${numberOne} ${operatorValue} ${numberTwo}`;
            console.log('Número 2:', numberTwo);
        }
    });
}

// get decimalNumber
buttonPoint.addEventListener('click', () => {
    if (!isOperatorSelected) {
        if (!numberOneArray.includes('.')) {
            if (numberOneArray.length === 0) {
                numberOneArray.push('0.');
            } else {
                numberOneArray.push('.');
            }
            numberOne = numberOneArray.join('');
            operatorPara.textContent = `${numberOne}`;
            console.log('Número 1:', numberOne);
        }
    } else {
        if (!numberTwoArray.includes('.')) {
            if (numberTwoArray.length === 0) {
                numberTwoArray.push('0.');
            } else {
                numberTwoArray.push('.');
            }
            numberTwo = numberTwoArray.join('');
            operatorPara.textContent = `${numberOne} ${operatorValue} ${numberTwo}`;
            console.log('Número 2:', numberTwo);
        }
    }
});

// get operator
for (let e of operators) {
    e.addEventListener('click', () => {
        if (!isOperatorSelected) { 
            operatorValue = e.dataset.operator;
            isOperatorSelected = true;
            operatorPara.textContent = `${numberOne} ${operatorValue}`;
            console.log('Operador:', operatorValue);
        } else {
            numberTwoArray = [];
            if(operatorValue === '-'){
                subtraction();
                numberOne = result;
                numberTwo = 0;
                operatorValue = e.dataset.operator;
                operatorPara.textContent =`${numberOne} ${operatorValue} `;
            }
            else if(operatorValue === '+'){
                addition();
                numberOne = result;
                numberTwo = 0;
                operatorValue = e.dataset.operator;
                operatorPara.textContent =`${numberOne} ${operatorValue}`;
            }
            else if(operatorValue === 'x'){
                multiplication();
                numberOne = result;
                numberTwo = 0;
                operatorValue = e.dataset.operator;
                operatorPara.textContent =`${numberOne} ${operatorValue} `;
            }
            else if(operatorValue === '/'){
                division();
                numberOne = result;
                numberTwo = 0;
                operatorValue = e.dataset.operator;
                operatorPara.textContent =`${numberOne} ${operatorValue}`;
            }
        }
    });
}

// result function
buttonEqual.addEventListener('click', () => {
    if(!isOperatorSelected || !numberOne || !numberTwo ){
        alert('El formato usado no es válido');
    }
    else if(isOperatorSelected && numberOne && numberTwo){
        numberTwoArray = [];
        if(operatorValue === '-'){
            resultPara.textContent ='';
            subtraction();
            numberOne = result;
            numberTwo = 0;
            isOperatorSelected = false;
            resultPara.textContent = result;
        }
        else if(operatorValue === '+'){
            resultPara.textContent = '';
            addition();
            numberOne = result;
            numberTwo = 0;
            isOperatorSelected = false;
            resultPara.textContent = result;
        }
        else if(operatorValue === 'x'){
            resultPara.textContent = '';
            multiplication();
            numberOne = result;
            numberTwo = 0;
            isOperatorSelected = false;
            resultPara.textContent = result;
        }
        else if(operatorValue === '/'){
            resultPara.textContent = '';
            division();
            numberOne = result;
            numberTwo = 0;
            isOperatorSelected = false;
            resultPara.textContent = result;
        }
    }
});

// addition function
const addition = function(){
    result = numberOne + numberTwo;
    if(result%1 === !0){
        result =result.toFixed(1);
    }
}
// subtraction function
const subtraction = function(){
    result = numberOne - numberTwo;
    if(result%1 === !0){
        result =result.toFixed(1);
    }
}
// division function
const division = function(){
    result = numberOne / numberTwo;
    if(result%1 === !0){
        result =result.toFixed(1);
    }
}
// multiplication function
const multiplication = function(){
    result = numberOne * numberTwo;
    if(result%1 === !0){
        result =result.toFixed(1);
    }
}
// clear function
clear.addEventListener('click',()=>{
    numberOne = 0;
    numberTwo = 0;
    numberOneArray = [];
    numberTwoArray = [];
    operatorPara.textContent = '';
    resultPara.textContent = '';

})

