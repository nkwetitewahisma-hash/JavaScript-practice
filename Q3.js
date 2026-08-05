// Question 3
// This program checks whether a number is even or odd.

const prompt = require("prompt-sync")();

let number = Number(prompt("Enter a number: "));

if (number % 2 === 0) {
    console.log(number + " is Even");
} else {
    console.log(number + " is Odd");
}