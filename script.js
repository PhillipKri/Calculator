// function add(a,b){
//     previous = a + b;
// }

// function subtract(a,b){
//     previous = a - b;
// }

// function multiply(a,b){
//     previous = a * b;
// }

// function divide(a,b){
//     previous = a / b;
// }

let currentVal = '';
let previousVal = '';
let operator1 = '';

document.addEventListener("DOMContentLoaded", function(){
    const clear = document.querySelector(".clear");
    const equal = document.querySelector(".equal");
    const decimal = document.querySelector(".decimal");

    const num = document.querySelectorAll(".num");
    const operator = document.querySelectorAll(".op");

    const display = document.querySelector(".display");
    const currentScreen = document.querySelector(".current");
    const previousScreen = document.querySelector(".previous");

    num.forEach((number) => number.addEventListener("click", function(e){
        numHandle(e.target.textContent)
        currentScreen.textContent = currentVal;
    }))

    operator.forEach((ope) => ope.addEventListener("click", function(e){
        opHandler(e.target.textContent)
        previousScreen.textContent = previousVal + " " + operator1;
        currentScreen.textContent = currentVal;
    }))

    clear.addEventListener("click", () => {
        previousVal = '';
        currentVal = '';
        operator1 = '';
        previousScreen.textContent = currentVal;
        currentScreen.textContent = currentVal;
    })

    equal.addEventListener("click", function(){
        if(currentVal != '' && previousVal != ''){
        calculate()
        previousScreen.textContent = '';
        if(previousVal.length <=7){
            currentScreen.textContent = previousVal;
        }else{
            currentScreen.textContent = previousVal.slice(0,5) + "...";
        }
    }
    })

    decimal.addEventListener("click", function(){

    })
})

function numHandle(n){
    if(currentVal.length <=7 ){
    currentVal += n;
    }
}

function opHandler(o){
    operator1 = o;
    previousVal = currentVal;
    currentVal = '';
}

function calculate(){
    previousVal = Number(previousVal);
    currentVal = Number(currentVal);
    if(operator1 === '+'){
        previousVal += currentVal;
    }else if(operator1 === '-'){
        previousVal -= currentVal;
    }else if(operator1 === 'x'){
        previousVal *= currentVal;
    }else {
        previousVal /= currentVal;
    }

    previousVal = roundNum(previousVal);
    previousVal = previousVal.toString();
    currentVal = previousVal.toString();
}

function roundNum(n){
    return Math.round(n*1000)/1000;
}

function addDecimal(){
    if(!currentVal.includes(".")){
        currentVal += '.'; 
    }
}
