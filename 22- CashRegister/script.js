/* File Type: JavaScript
* Cash Register
* Author: Uriel Neves Silva ( https://github.com/Nevoada10 )
*/

// This is simple webpage that simulates a cash register

// DEFINING GLOBAL VARIABLES:
let price = 12;
let priceInCents = price * 100;


// DEFINING REUSABLE POINTERS:
const displayChangeDuePointer = document.getElementById('change-due'); // P element display
const cashPointer = document.getElementById('cash'); 
const purchaseBtnPointer = document.getElementById('purchase-btn');
const priceScreenPointer = document.getElementById('price-screen');
const cashDrawerDisplayPointer = document.getElementById('cash-drawer-display');

// FUNCTIONS:

// check change due function

function checkChangeDue() {

    // CATCHING USEFUL VARIABLES:
    let cash = parseFloat(cashPointer.value);
    let cashInCents = cash * 100;

    let resultdisplay = displayChangeDuePointer.innerText;

    // Check if the customer has enough cash to buy the item
    if ( cashInCents < priceInCents ) { // OKAY
        alert("Customer does not have enough money to purchase the item");
    }
    else if ( cashInCents === priceInCents) { // OKAY
        displayChangeDuePointer.innerText = "No change due - customer paid with exact cash";
    }
    else {
        // Cash drawer array
        let cid = 
        [ 
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

        // Update cid in cents
        cid.forEach((item) => {
            item[1] = Math.round(item[1] * 100);
        });

        // Create a list that shows how much each coin is worth in cents
        let coinList = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];

        // Create a loop that append each coin value to the cid to the right of every list
        for (let i=0; i<coinList.length; i++)
        {
            cid[i][2] = coinList[i];
        }

        // LAST CHECKPOINT
        console.log("Updated cash drawer in cents, and with coin values:", cid);

        // Calculate the change due
        let changeDue = cashInCents - priceInCents;

        //let coinCounts = new Array(cid.length).fill(0);

        // Create a reversed loop that looks from the biggest to the smallest coin 
        for (let i=cid.length-1; i>=0; i--)
            {
                while ( (cid[i][2] <= changeDue && cid[i][1] > 0) ) // While this condition is true the current coin will be used
                {
                    changeDue -= cid[i][2]; // Subtract the value of the current coin from the change due
                    cid[i][1] -= cid[i][2]; // Subtract the value of the current coin from the cash drawer
                    cid[i][3] += cid[i][2]; // Add a column with how many of these coins were used
                    console.log(`Using coin ${cid[i][0]} worth ${cid[i][2]} cents. Remaining change due: ${changeDue} cents.`);
                }
            }
        console.log("Updated cash drawer2:", cid);
        // console.log("Coin counts:", coinCounts);

        // TODO: All the logic

    }

}

