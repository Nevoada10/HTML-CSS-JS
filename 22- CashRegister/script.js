/* File Type: JavaScript
 * Cash Register
 * Author: Uriel Neves Silva ( https://github.com/Nevoada10 )
 */

// This is simple webpage that simulates a cash register


// SUMARY:
// 1) GLOBAL VARIABLES SECTION
// 2) FUNCTIONS SECTION
// 3) MAIN CODE SECTION


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// GLOBAL VARIABLES SECTION:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let price = 20;
let priceInCents = Math.round(price * 100);

// Cash drawer array
let cid = [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
];

// Create a deep copy of the cash drawer array for resetting the CID after a purchase
    // The map method creates a new array by applying a function to each element; in this case, the function is item.slice()
    // item.slice() creates a new array with the same elements as the original array because slice() returns a copy of the array
const cid_original = cid.map(item => item.slice());

// DEFINING REUSABLE POINTERS (In the same order as the HTML elements)

// Input elements:
const cashPointer = document.getElementById('cash'); // CASH INPUT FIELD
const purchaseBtnPointer = document.getElementById('purchase-btn'); // PURCHASE BUTTON

// Single Display elements:
const priceDisplayPointer = document.getElementById('price-display'); // PRICE DISPLAY
const cashDisplayPointer = document.getElementById('cash-display'); // CASH DISPLAY
const changeValuePointer = document.getElementById('change-value');  // CHANGE VALUE DISPLAY, in dollars

// CID Display elements:
const displayChangeDuePointer = document.getElementById('change-due'); // CHANGE DUE DISPLAY, format(Status: OPEN/CLOSED)
const cashInDrawerPointer = document.getElementById('cash-in-drawer');


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// GLOBAL VARIABLES SECTION
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~






// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// START OF FUNCTIONS SECTION
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


    /**
     * checkChangeDue()
     * 
     * This function is called when the purchase button is clicked. It checks if the customer has enough cash to buy the item, and if so, it calculates the change due.
     * It then updates the cash in drawer, and displays the change due.
     * If the customer has enough cash to buy the item, it displays a message saying that the customer paid with exact cash, and if the change due is positive, it displays a message saying that the cash drawer doesn't have enough coins.
     * If the change due is equal to zero, it displays a message saying that the cash in drawer is equal to the change due.
     * If the change due is negative, it displays a message saying that the customer doesn't have enough money to purchase the item.
     * 
     * It also updates the cash in drawer, and displays the change due.
     */
function checkChangeDue() {

    // ----------------------------------------------------------------------------------------------
    // STEP 1: CATCHING USEFUL VARIABLES
    // ----------------------------------------------------------------------------------------------

    // Get the price of the item from the input
    let cash = parseFloat(cashPointer.value); // parse: to convert the input(string) to a number(float)

    // Convert the price and the cash to cents
    let cashInCents = Math.round(cash * 100);
    let priceInCents = Math.round(price * 100);

    // Display the cash in the cash display element
    cashDisplayPointer.innerText = `Cash: $${cash}`;

    // ----------------------------------------------------------------------------------------------
    // STEP 2: CHECK IF THE CUSTOMER HAS ENOUGH CASH TO BUY THE ITEM
    // ----------------------------------------------------------------------------------------------
    
    if (cashInCents < priceInCents) { 
        alert("Customer does not have enough money to purchase the item");
        displayChangeDuePointer.innerText = "Status: INSUFFICIENT_FUNDS.";
        return;
    }
    else if (cashInCents === priceInCents) { 
        displayChangeDuePointer.innerText = "No change due - customer paid with exact cash.";
        return;
    }
    else {

        // ----------------------------------------------------------------------------------------------
        // STEP 3: UPDATE CID AND DISPLAY THE CHANGE DUE
        // ----------------------------------------------------------------------------------------------

        // Update cid in cents
        cid.forEach((item) => {
            item[1] = Math.round(item[1] * 100);
        });

        // Create a list that shows how much each coin is worth in cents
        let coinList = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];

        // Create a loop that append each coin value to the cid to the right of every list
        for (let i = 0; i < coinList.length; i++)
        {
            cid[i][2] = coinList[i];
        }

        // Add a column that shows how many of each coin was used
        for (let i = 0; i < coinList.length; i++)
        {
            cid[i][3] = 0;
        }

        // Calculate the change due
        let changeDue = cashInCents - priceInCents;

        // Display the change due
        changeValuePointer.innerText = `Change due: $${changeDue / 100}`;

        // ----------------------------------------------------------------------------------------------
        // STEP 4: LOOP THAT CHECKS IF THE CASH DRAWER HAS ENOUGH COINS
        // ----------------------------------------------------------------------------------------------

        // Create a reversed loop that looks from the biggest to the smallest coin
        for (let i = cid.length - 1; i >= 0; i--)
        {
            while (cid[i][2] <= changeDue && cid[i][1] > 0) // While the current coin is less than or equal to the change due and the cash drawer has enough of that coin
            {
                cid[i][1] -= cid[i][2]; // Subtract the value of the current coin from the cash drawer
                changeDue -= cid[i][2]; // Subtract the value of the current coin from the change due
                cid[i][3] += cid[i][2]; // Add the value of the current coin to the column that shows the total value of the coins that were used
                // console.log(`Using coin ${cid[i][0]} worth ${cid[i][2]} cents. Remaining change due: ${changeDue} cents.`);
            }
        }

        // ----------------------------------------------------------------------------------------------
        // STEP 5: DISPLAY THE CHANGE DUE AND UPDATE CID
        // ----------------------------------------------------------------------------------------------

        // If change due is still positive, it means the cash drawer doesn't have enough coins
        if (changeDue > 0) {
            displayChangeDuePointer.innerText = `Status: INSUFFICIENT_FUNDS`;
            return;
        }

        // "Status: CLOSED": if cash-in-drawer is equal to the change due.
        
        if (cid[0][1] === changeDue) {
            let statusMessage = "Status: CLOSED"; // Start with the initial status message

            for (let i = cid.length - 1; i >= 0; i--) {
                if (cid[i][3] > 0) { // Check if the value is greater than zero
                    statusMessage += `\n ${cid[i][0]}: $${cid[i][3] / 100}`; // Append only if greater than zero
                }
            }
            // FORMAT EXAMPLE: "Status: CLOSED TWENTY: $60 TEN: $20 FIVE: $15 ONE: $1 QUARTER: $0.5 DIME: $0.2 PENNY: $0.04".
            displayChangeDuePointer.innerText = statusMessage; 
            return;
        }
        
        //"Status: OPEN": if cash-in-drawer is greater than the change due.
        let statusMessage = "Status: OPEN";

        for (let i = cid.length - 1; i >= 0; i--) //
        {
            if (cid[i][3] > 0) {
                statusMessage += `\n ${cid[i][0]}: $${cid[i][3] / 100}`;
            }
        }

        // FORMAT EXAMPLE: "Status: OPEN TWENTY: $60 TEN: $20 FIVE: $15 ONE: $1 QUARTER: $0.5 DIME: $0.2 PENNY: $0.04".
        displayChangeDuePointer.innerText = statusMessage;

        // Make a loop that displays the cash-in-drawer updated full CID after the purchase
        cashInDrawerPointer.innerHTML = "Cash in drawer:";
        for (let i = cid.length - 1; i >= 0; i--)
        // FORMAT EXAMPLE: "Cash in drawer: TWENTY: $60 TEN: $20 FIVE: $15 ONE: $1 QUARTER: $0.5 DIME: $0.2 PENNY: $0.04"
        {
            cashInDrawerPointer.innerText += `\n ${cid[i][0]}: $${cid[i][1] / 100}`;
        }

        // -----------------------------------------------------------------------------------------------
        // STEP 6: RESET CID TO IT'S ORIGINAL VALUES
        // -----------------------------------------------------------------------------------------------
        cid = cid_original.map(item => item.slice());
    }
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// END OF FUNCTIONS SECTION
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~





// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// MAIN CODE SECTION (starting state):
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
priceDisplayPointer.innerText = `Price: $${price}`;
