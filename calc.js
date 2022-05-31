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
    console.log(result);
}

function divide (num1, num2) {
    let result = num1 / num2;
    console.log(result);
}

function operate (operator, num1, num2) {
    if(operator === '+') {
        let result = add(num1, num2);
    } else if (operator === '*') {
        let result = multiply(num1, num2);
    } else if (operator === '-') {
        let result = subtract(num1, num2);
    } else {
        let result = divide(num1, num2);
    };
}