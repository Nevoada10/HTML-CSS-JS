// =================================================================================
// File Type: JavaScript
// Palindrome Checker  (Certificate Project 6)
// Author: Nevoada ( https://github.com/Nevoada10 )
// =================================================================================
// This is a simple script that checks if a given string is a palindrome
// and displays the result using html, css and javascript.
// =================================================================================

function checkPalindrome() { // Create a function called checkPalindrome
    // Get the text input element and the element that displays the result
    // Let the user input a string

    const textInput = document.getElementById('text-input');  // The text input element is used to get the input from the user
    const resultElement = document.getElementById('result');  // The result element is used to display the result of the check

    // Check if the input is empty
    if (!textInput.value.trim()) { // If you remove the whitespace with trim(), and you check if the input is empty, 
        // Alert the user and return nothing
        alert("Please input a value");
        return;
    }

    // Remove all non-alphanumeric characters and convert the string to lowercase
    // This is done to simplify the comparison
    const cleanedText = textInput.value.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Split the cleaned text into an array of characters
    // Reverse the array
    // Join the reversed array back into a string
    // Compare the cleaned text with the reversed string
    // If the two strings are equal, the cleaned text is a palindrome
    const isPalindrome = cleanedText === cleanedText.split('').reverse().join('');

    // Display the result
    // If the cleaned text is a palindrome, display a success message
    // If the cleaned text is not a palindrome, display an error message
    resultElement.textContent = isPalindrome 
        ? `"${textInput.value}" is a palindrome!` 
        : `"${textInput.value}" is not a palindrome.`;
}