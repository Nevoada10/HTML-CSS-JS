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
    // trim() removes any possible whitespace remaining in the input. Ex: "--" or "\n -> "-"
    if (!romanInput.value.trim()) { 
        decimalOutput.textContent = "Please enter a valid number";
        return; // skip the rest of the function to not display an empty result
    }
    else if (romanInput.value < 1) {
        decimalOutput.textContent = "Please enter a number greater than or equal to 1";
    }

    else if (romanInput.value > 3999) {
        decimalOutput.textContent = "Please enter a number less than or equal to 3999";
    }
    else{
       
        const roman = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
        
    }

    let sum = 0;
    let prevValue = 0;

     // Create a dictionary to map Roman numerals to their corresponding decimal values
    const roman = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}

    for (let index = romanInput.value.length - 1; index < 0; index++ )
        console.log(romanInput.value[index]);

}