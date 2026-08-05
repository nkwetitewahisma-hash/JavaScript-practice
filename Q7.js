// Question 7
// This program counts the vowels in a string.

const prompt = require("prompt-sync")();

let text = prompt("Enter a string: ");

let count = 0;

for (let i = 0; i < text.length; i++) {

    let ch = text[i].toLowerCase();

    if (
        ch === "a" ||
        ch === "e" ||
        ch === "i" ||
        ch === "o" ||
        ch === "u"
    ) {
        count++;
    }
}

console.log("Number of vowels =", count);