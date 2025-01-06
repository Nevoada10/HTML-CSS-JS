// =================================================================================
// File Type: JavaScript
// Roman to Integer (Certificate Project 7)
// Author: Nevoada ( https://github.com/Nevoada10 )
// =================================================================================
// This is a script that converts int to Roman numerals to integers using html, css and javascript.
// =================================================================================

function intToRoman() { // (str) -> (int)
    // Creates pointers to the input and output fields
    const decimalInput = document.getElementById("number");
    const romanOutput = document.getElementById("output"); 

    // Check if the input is empty, in this order...
    // trim() removes any possible whitespace remaining in the input. Ex: "--" or "\n -> "-"
    if (!decimalInput.value.trim()) { 
        romanOutput.textContent = "Please enter a valid number";
        return; // skip the rest of the function to not display an empty result
    }

    const romanToInt = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
    };
    
    if (decimalInput.value < 1) {
        romanOutput.textContent = "Please enter a number greater than or equal to 1";
    }
    else if (decimalInput.value > 3999) {
        romanOutput.textContent = "Please enter a number less than or equal to 3999";
    }

};


1582

