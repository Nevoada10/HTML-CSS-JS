const messageInput = document.getElementById("message-input");
const result = document.getElementById("result");
const checkMessageButton = document.getElementById("check-message-btn");

const helpRegex = /please help/i;

const isSpam = (msg) => msg.match(helpRegex);

checkMessageButton.addEventListener("click", () => { 
    if (messageInput.value === "") {    
        alert("Please enter a message.");
        return;
    }});

result.textContent = isSpam(messageInput.value)
? "Oh no! This looks like a spam message."
: "This message does not seem to contain any spam.";
messageInput.value = "";
;


/* File Type: JavaScript
* Regex
* Author: Uriel Neves Silva ( https://github.com/Nevoada10 )
*/