// Question 5
// This program reverses a string.

const prompt = require("prompt-sync")();

let text = prompt("Enter a string: ");

let reversed = "";

for (let i = text.length - 1; i >= 0; i--) {
    reversed += text[i];
}

console.log("Reversed string =", reversed);