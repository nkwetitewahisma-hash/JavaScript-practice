// Question 2
// This program reads two numbers from the user and displays their sum.

const prompt = require("prompt-sync")();

let num1 = Number(prompt("Enter the first number: "));
let num2 = Number(prompt("Enter the second number: "));

let sum = num1 + num2;

console.log("Sum =", sum);