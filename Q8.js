// Question 8
// This program prints the multiplication table of a number.

const prompt = require("prompt-sync")();

let number = Number(prompt("Enter a number: "));

for (let i = 1; i <= 10; i++) {

    console.log(number + " x " + i + " = " + (number * i));

}