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

function removeWhitespaces() { // (str) -> (str)
    // Remove whitespaces
    let phoneNumber = phoneNumberTA.value.trim() 

    // Check if the input is empty
    if(phoneNumber == ""){
        outputP.innerHTML = "Please provide a phone number";
        return;
    }
}

function checkPhone() { // (str) -> (str)

    let phoneNumber = phoneNumberTA.value;
    removeWhitespaces();

    // Remove all non-numeric characters from the string
    phoneNumber = phoneNumber.replace(/[^0-9]/g, '');


    if (phoneNumber.length == 11 ){

        // Check if the first digit is 1
        if (phoneNumber.charAt(0) == "1"){

            // Remove the first digit
            phoneNumber = phoneNumber.slice(1);
        }
    }

    // if there is any type of parenthesis  "(" or  ")"in the phoneNumber
    
    // Now all we have to do is check if the remaining string is a valid phone number
    if (phoneNumber.length == 10){
        
        outputP.innerHTML ="Valid US number: " + phoneNumberTA.value;
        return true;
    }

    else {
       outputP.innerHTML ="Invalid US number: " + phoneNumberTA.value; 
       return false;
    }

};

function clearAll() { 
    phoneNumberTA.value = "";
    outputP.innerHTML = "";
};