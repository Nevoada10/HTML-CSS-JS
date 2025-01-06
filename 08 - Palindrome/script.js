// =================================================================================
// File Type: JavaScript
// Palindrome Checker  (Certificate Project 6)
// Author: Nevoada ( https://github.com/Nevoada10 )
// =================================================================================
// This is a script that checks if a given string is a palindrome using html, css and javascript.
// =================================================================================

function checkPalindrome() { // (str) -> (void)

    // Assign variables that points respectively to the input element and the result element
    const textInput = document.getElementById('text-input');  
    const resultElement = document.getElementById('result');  

    // Check if the input is empty, in this order...
    // 1. trim() removes any possible whitespace remaining in the input. Ex: "--" or "\n -> "-"
    // 2. !=textInput.value checks if the value is not "" (empty string), null or undefined.
    // -> If the input is empty (true), it displays an alert message.
    if (!textInput.value.trim()) { 
        alert("Please input a value");
        return; // skip the rest of the function to not display an empty result
    }
    // convert the string to lowercase - (equivalent to Join + Filter in Python )
    // remove non alphanumeric (upper and lower letters and numbers) characters 
    const cleanedText = textInput.value.toLowerCase().replace(/[^a-zA-Z0-9]/g, ''); // (str) -> (str)
   
    // Reverse the string, in this order, left to right
    // We need to do all of this because reverse() only works with arrays
    // 1. split('') splits the string into an array of characters (str) -> (array)
    // 2. reverse() reverses the array (array) -> (array)
    // 3. join('') joins the reversed array into a stringc (array) -> (str)
    const reversedText = cleanedText.split('').reverse().join('');

    resultElement.textContent = `${textInput.value} is not a palindrome.`;

    if (cleanedText === reversedText) {
        resultElement.textContent = `${textInput.value} is a palindrome.`;
    }

    const themes = {pink: "pink-style", blue: "blue-style"};

    if (cleanedText === 'pink') {
        const blueStylesheet = document.getElementById('blue-style');
        const pinkStylesheet = document.getElementById('pink-style');

        blueStylesheet.disabled = true;
        pinkStylesheet.disabled = false;
        resultElement.textContent = "Ooh, PINK theme activated! 💖";
        return;

    } else if (cleanedText === 'blue') {
        const blueStylesheet = document.getElementById('blue-style');
        const pinkStylesheet = document.getElementById('pink-style');

        pinkStylesheet.disabled = true;
        blueStylesheet.disabled = false;
        resultElement.textContent = "Ooh, BLUE theme activated! 💖";
        return;
    }
}


function handleEnterKey(event) {
    // Check if the pressed key is Enter (key code 13)
    if (event.keyCode === 13 || event.key === 'Enter') {
        checkPalindrome();
    }
}