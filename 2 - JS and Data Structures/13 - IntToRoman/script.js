/* File Type: JavaScript
* Integer to Roman
* Author: Uriel Neves Silva ( https://github.com/Nevoada10 )
*/

// This is a simple script that converts integers to roman numerals

function convertToRoman() { // (str) -> (int) -> (str)

    // Pointers to input and output HTML elements
    let userInput = document.getElementById("number"); // text input
    let output = document.getElementById("output");   // p element

    let intNumber = userInput.value;

    //Remove whitespaces and check if the input is empty
    if (intNumber.trim() == "") { 
        output.textContent = "Please enter a valid number";
        return;}

    // (str) -> (int)
    intNumber = parseInt(intNumber); 

    // Entry validation
    if (intNumber < 1) { 
        output.textContent ="Please enter a number greater than or equal to 1";
        return;}
    if (intNumber > 3999){ 
        output.textContent ="Please enter a number less than or equal to 3999";
        return;}

    // Main logic
    let romanDict = {1000: "M", 900: "CM", 500: "D", 400: "CD", 100: "C", 90: "XC", 50: "L", 40: "XL", 10: "X", 9: "IX", 5: "V", 4: "IV", 1: "I"}
    

    // b - a is used to sort the keys in descending order  
    // map is used to return an array of integers, without it sort would return an array of strings.

    let result = "";
    const descendingKeys = Object.keys(romanDict).sort((a, b) => b - a).map(Number);  //[1000,900,500,400,100,90,50,40,10,9,5,4,1]


    // We are going to iterate through the keys in dictionary in descending order
    // If the key is less than or equal to the number, we will add the value to the left of the result
    // We will subtract the key from the number.

    for (let i = 0; i < descendingKeys.length; i++) {
        let key = descendingKeys[i]; // 
        while (key <= intNumber) {
            result += romanDict[key];
            intNumber -= key;
        }
    }
    output.textContent = result;
    return result;
};
