// Question 6
// This program checks whether a string is a palindrome.

const prompt = require("prompt-sync")();

let text = prompt("Enter a string: ");

let reversed = "";

for (let i = text.length - 1; i >= 0; i--) {
    reversed += text[i];
}

if (text === reversed) {
    console.log("It is a palindrome.");
} else {
    console.log("It is not a palindrome.");
}