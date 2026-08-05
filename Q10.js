// Question 10
// This program encrypts a message using a Caesar Cipher with a shift of 3.

const prompt = require("prompt-sync")();

let message = prompt("Enter a message: ");

let encrypted = "";

for (let i = 0; i < message.length; i++) {

    let ch = message[i];

    if (ch >= "a" && ch <= "z") {

        encrypted += String.fromCharCode(
            ((ch.charCodeAt(0) - 97 + 3) % 26) + 97
        );

    } else if (ch >= "A" && ch <= "Z") {

        encrypted += String.fromCharCode(
            ((ch.charCodeAt(0) - 65 + 3) % 26) + 65
        );

    } else {

        encrypted += ch;

    }
}

console.log("Encrypted message =", encrypted);