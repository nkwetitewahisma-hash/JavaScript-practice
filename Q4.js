// Question 4
// This program finds the largest among three numbers.

const prompt = require("prompt-sync")();

let num1 = Number(prompt("Enter first number: "));
let num2 = Number(prompt("Enter second number: "));
let num3 = Number(prompt("Enter third number: "));

let largest = num1;

if (num2 > largest) {
    largest = num2;
}

if (num3 > largest) {
    largest = num3;
}

console.log("Largest number =", largest);