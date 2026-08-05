// Question 9
// This program counts the digits in an integer.

const prompt = require("prompt-sync")();

let number = Math.abs(Number(prompt("Enter an integer: ")));

let count = 0;

while (number > 0) {

    number = Math.floor(number / 10);

    count++;

}

console.log("Number of digits =", count);