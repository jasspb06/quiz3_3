// The program to find the sum of natural numbers using recursion

function sum(num) {
    if(num > 0) {
        return num + sum(num - 1);
    }
    else {
        return num;
    }
 }

// Ask the user to enter the natural number
const number = parseInt(prompt('Enter a natural number: '));

const result = sum(number);

// Show the result
console.log(`The sum is ${result}`);