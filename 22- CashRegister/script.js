/* File Type: JavaScript
* Cash Register
* Author: Uriel Neves Silva ( https://github.com/Nevoada10 )
*/

// This is simple webpage that simulates a cash register

console.log("Javascript linked successfully!")

// DEFINING REUSABLE POINTERS:
const displayChangeDuePointer = document.getElementById('change-due'); // P element display
const cashPointer = document.getElementById('cash'); 
const purchaseBtnPointer = document.getElementById('purchase-btn');
const priceScreenPointer = document.getElementById('price-screen');
const cashDrawerDisplayPointer = document.getElementById('cash-drawer-display');

console.log("displayChangeDuePointer:", displayChangeDuePointer);
console.log("cashPointer:", cashPointer);
console.log("purchaseBtnPointer:", purchaseBtnPointer);
console.log("priceScreenPointer:", priceScreenPointer);
console.log("cashDrawerDisplayPointer:", cashDrawerDisplayPointer);


let price = 12;


// FUNCTIONS:

// check change due function

function checkChangeDue() {

    // CATCHING USEFUL VARIABLES:
    let cash = parseFloat(cashPointer.value);
    let resultdisplay = displayChangeDuePointer.innerText;

    console.log("Current cash:", cash);
    console.log("Current price:", price);

    // Check if the customer has enough cash to buy the item
    if ( cash < price ) {
        alert("Customer does not have enough money to purchase the item");
    }
    else if ( cash === price) {
        displayChangeDuePointer.innerText = "No change due - customer paid with exact cash";
    }
}

