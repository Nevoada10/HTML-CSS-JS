// =================================================================================
// File Type: JavaScript
// Roman to Integer (Certificate Project 7)
// Author: Nevoada ( https://github.com/Nevoada10 )
// =================================================================================
// This is a script that converts Roman numerals to integers using html, css and javascript.
// =================================================================================

function romanToInt() { // (str) -> (int)
    // Creates pointers to the input and output fields
    const romanInput = document.getElementById("number"); // data
    const decimalOutput = document.getElementById("output");
    console.log(`Type of romanInput: ${typeof romanInput}`)

    // Check if the input is empty, in this order...
    // 1. trim() removes any possible whitespace remaining in the input. Ex: "--" or "\n -> "-"
    // 2. !=romanInput.value checks if the value is not "" (empty string), null or undefined.
    // -> If the input is empty (true), it displays an alert message.
    if (!romanInput.value.trim()) { 
        alert("Please input a value");
        return; // skip the rest of the function to not display an empty result
    }

    // Create a dictionary to map Roman numerals to their corresponding decimal values
    const roman = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}

    let result = 0;
    let prev_value = 0;




}