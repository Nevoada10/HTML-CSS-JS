/* File Type: JavaScript
* Integer to Roman
* Author: Uriel Neves Silva ( https://github.com/Nevoada10 )
*/

// This is a simple function that receives a phone number and returns a boolean value indicating if it is valid or not

//define reusable pointers 
let phoneNumberTA = document.getElementById("user-input"); // Input text area object
//let outputP = document.getElementById("result"); // Output paragraph object
let outputP = document.getElementById("results-div"); // Target the entire results div
let clearButton = document.getElementById("clear-btn"); // Clear button object


function checkPhone() { // (str) -> (str)

    console.log("checkPhone() was called")
    console.log(`phoneNumberTA.value = ${phoneNumberTA.value}`)

    // Remove whitespaces at the beginning and end, them replace whitespaces with a no spaces
    let phoneNumber = phoneNumberTA.value.trim(). replace(/\s+/g, "");

    console.log(`phoneNumber = ${phoneNumber}`)

    if (phoneNumber == ""){
        alert("Please provide a phone number");
        return;
    }

    // Create a list of all accepted regex formats
    const phonePatterns = 
    [
        /^1\d{3}-\d{3}-\d{4}$/, // 1 555-555-5555
        /^1?\(\d{3}\)\d{3}-\d{4}$/,// 1 (555) 555-5555, 1(555)555-5555|| Both are "equal" there is no whitespaces between.
        /^1?\d{10}$/, // 1 555 555 5555,  5555555555
        /^\d{3}-\d{3}-\d{4}$/,// 555-555-5555 
        /^\(\d{3}\)\d{3}-\d{4}$/,// (555)555-5555
    ]
       
    // If the format is valid
    if (phonePatterns.some(pattern => pattern.test(phoneNumber))){
        console.log("The format is valid")
        outputP.innerHTML ="Valid US number: " + phoneNumberTA.value;
        return true;
    }

    // If not valid
    else {
        console.log("The format is not valid")
       outputP.innerHTML ="Invalid US number: " + phoneNumberTA.value; 
       return false;
    }

};

function clearAll() { 
    console.log("clearAll() was called")
    phoneNumberTA.value = "";
    outputP.innerHTML = "";
    outputP.className = "invalid"; // Apply invalid class
};