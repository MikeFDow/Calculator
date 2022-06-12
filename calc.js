let array1 = [];
let num1 = "";
let num2 = "";
let operator = "";


function add (num1, num2) {
    let result = num1 + num2;
    return result;
}

function subtract (num1, num2) {
    let result = num1 - num2;
    return result;
}

function multiply (num1, num2) {
    let result = num1 * num2;
    return result;
}

function divide (num1, num2) {
    let result = num1 / num2;
    return result;
}

function operate (operator, num1, num2) {
    let result = "";
    if(operator === '+') {
       result = add(num1, num2);
    } else if (operator === '*') {
       result = multiply(num1, num2);
    } else if (operator === '-') {
        result = subtract(num1, num2);
    } else {
        result = divide(num1, num2);
    };
    return result;
}

const display = document.querySelector('#display');
// display.textContent = array1;
/*
const btnOne = document.querySelector('#btnOne');
btnOne.addEventListener("click", function() {
    array1.push('1');
    display.textContent = array1.join("");
    //for (i=0; i<array1.length; i++) {
    //    display.textContent = array1[i].length;
   // }
    console.log(array1);
});

const btnTwo = document.querySelector('#btnTwo');
btnTwo.addEventListener("click", function() {
    array1.push('2');
    display.textContent = array1.join("");
    console.log(array1);
});

*/
const dButtons = document.querySelectorAll('button.digit');

dButtons.forEach((button) => {
    button.addEventListener('click', () => {
        array1.push(button.id);
        display.textContent = array1.join("");
        console.log(array1);
    });
});

const addButton = document.querySelector('#addButton');
/*
addButton.addEventListener("click", function() {             // ADD
    operator = '+';
    num1 = parseInt(array1.join(""));
    array1 = [];
    console.log(operator);
    console.log(num1);
    console.log(array1);
});
*/
const subButton = document.querySelector("#subButton");
/*
subButton.addEventListener("click", function() {             // SUBTRACT
    operator = '-';
    num1 = parseInt(array1.join(""));
    array1 = [];
    console.log(operator);
    console.log(num1);
    console.log(array1);
});
*/
const equalButton = document.querySelector("#equalButton");

equalButton.addEventListener("click" , function() {             //EQUAL
    num2 = parseInt(array1.join(""));
    let result = operate(operator, num1, num2);
    if(parseFloat(result) % 1 != 0) {
        display.textContent = parseFloat(result).toFixed(3);
    } else {
        display.textContent = result;
    };
    array1 = [];
    console.log(num1);
    console.log(result);
});

const clrButton = document.querySelector('#clrButton');

clrButton.addEventListener("click", function() {                //CLEAR
    array1 = [];
    display.textContent = "";
    num1 = "";
    num2 = "";
    operator = "";
});


/*
addButton.addEventListener("click", function() {                   // ADD
    if(Number.isInteger(num1)) {
        num2 = parseInt(array1.join(""));
        let result = operate(operator, num1, num2);
        display.textContent = result;
        operator = '+';
        array1 = [];
        num1 = result;
        console.log(result);
    } else {
        operator = '+';
        num1 = parseInt(array1.join(""));
        array1 = [];
        console.log(operator);
        console.log(num1);
        console.log(array1);
    };
});


subButton.addEventListener("click", function() {                // SUBTRACT
    if(Number.isInteger(num1)) {
        num2 = parseInt(array1.join(""));
        let result = operate(operator, num1, num2);
        display.textContent = result;
        operator = '-'                                      // order of these statements withing if statement is crucial. operators value changes AFTER operate function, needed for chained operations such as (4 + 5 * 10)
        array1 = [];
        num1 = result;
        console.log(result);
    } else {
        operator = '-';
        num1 = parseInt(array1.join(""));
        array1 = [];
        console.log(operator);
        console.log(num1);
        console.log(array1);
    };
});

const multiplyButton = document.querySelector("#multiplyButton");

multiplyButton.addEventListener("click", function() {                // MULTIPLY
    if(Number.isInteger(num1)) {
        num2 = parseInt(array1.join(""));
        let result = operate(operator, num1, num2);
        display.textContent = result;
        operator = '*';
        array1 = [];
        num1 = result;
        console.log(result);
    } else {
        operator = '*';
        num1 = parseInt(array1.join(""));
        array1 = [];
        console.log(operator);
        console.log(num1);
        console.log(array1);
    };
});
*/

const opButtons = document.querySelectorAll('button.op');   // Event listeners for operator buttons

opButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if(Number.isInteger(num1)) {
            num2 = parseInt(array1.join(""));
            let result = operate(operator, num1, num2);
            if(parseFloat(result) % 1 != 0) {
                display.textContent = parseFloat(result).toFixed(3);
            } else {
                display.textContent = result;
            };
            operator = button.id;
            array1 = [];
            num1 = result;
            console.log(result);
        } else {
            operator = button.id;
            num1 = parseInt(array1.join(""));
            array1 = [];
            console.log(operator);
            console.log(num1);
            console.log(array1);
        };
    });
});

const backButton = document.querySelector('#backspace');

backButton.addEventListener('click', function() {
    array1.pop();
    display.textContent = array1.join("");
    console.log(array1);
})