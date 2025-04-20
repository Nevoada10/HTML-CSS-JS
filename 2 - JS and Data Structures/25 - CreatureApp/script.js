/* ================================================================================
* File Type: JavaScript
* Creature Finder (Certificate Project 10)
* Author: Uriel Neves Silva ( https://github.com/Nevoada10 )
* =================================================================================

This wepage allows users to search for creature by name and view detailed information about them.
- At the top we have a search bar and a button to search for a creature.
- Below that we have a display area that shows the creature's name, ID, and detailed information, in this order.

=================================
Classes and IDs in creature.html
=================================

#IDs:
    Form: (1)
        search-form: Container for the search form. 
    
    Input: (1)
        search-input: Input field for creature name or ID.

    Div: (4)
        display-area: Container for displaying creature information.
        name-and-id: Container for creature's name and ID.
        weight-and-height: Container for creature's weight and height.
        abilities: Container for creature's abilities and stats.

    Span: (12)
        creature-name: Element for displaying the name of the creature.
        creature-id: Element for displaying the ID of the creature.
        weight: Element for displaying the weight of the creature.
        height: Element for displaying the height of the creature.
        types: Element for displaying the types of the creature.
        creature-image: Element for displaying the image of the searched creature.

        hp: Displays the creature's HP.
        attack: Displays the creature's Attack.
        defense: Displays the creature's Defense.
        special-attack: Displays the creature's Special Attack.
        special-defense: Displays the creature's Special Defense.
        speed: Displays the creature's Speed.

    Table: (1)
        stats-table: Table displaying the creature's stats.


    .Classes: (No classes defined in the current document)
*/

// FILE START, BEGINNING OF SCRIPT
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// GLOBAL VARIABLES
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// Search Form (SEARCH BAR)
// const searchFormPointer = document.getElementById("search-form"); // 1 (Not used)
const searchInputPointer = document.getElementById("search-input"); // 2 

// Display Area (TOP CONTAINER)
const creatureNamePointer = document.getElementById("creature-name"); // 3
const creatureIdPointer = document.getElementById("creature-id"); // 4
const weightPointer = document.getElementById("weight"); // 5
const heightPointer = document.getElementById("height"); // 6
// const creatureImagePointer = document.getElementById("creature-image"); // 7 (Not used)
const typesPointer = document.getElementById("types"); // 8

// Display Area (BOTTOM CONTAINER)
const hpPointer = document.getElementById("hp"); // 9
const attackPointer = document.getElementById("attack"); // 10
const defensePointer = document.getElementById("defense"); // 11
const specialAttackPointer = document.getElementById("special-attack"); // 12
const specialDefensePointer = document.getElementById("special-defense"); // 13
const speedPointer = document.getElementById("speed"); // 14

const allCreaturesUrl = "https://rpg-creature-api.freecodecamp.rocks/api/creatures/"; // For fetching all creatures
const creatureUrl = "https://rpg-creature-api.freecodecamp.rocks/api/creature/"; // For a specific creature (without an 's' at the end)


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// AUXILIAR FUNCTIONS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/**
 * FUNCTION: CAPITALIZE
 * Capitalizes the first letter of a string.
 * 
 * @param {string} str - The string to be capitalized.
 * @returns {string} - The capitalized string.
 */
function capitalize(str) {
    // Convert the first character to uppercase and the rest to lowercase
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}


/**
 * FUNCTION: RESET DISPLAY AREA
 * Clears the content of all elements in the display area.
 * 
 * @param {void}
 * @returns {void}
 */
function resetDisplayArea() {

    // Clear upper container elements
    creatureNamePointer.textContent = ""; 
    creatureIdPointer.textContent = "";
    weightPointer.textContent = ""; 
    heightPointer.textContent = ""; 
    typesPointer.textContent = ""; 

    // Clear stats table elements
    hpPointer.textContent = ""; 
    attackPointer.textContent = ""; 
    defensePointer.textContent = ""; 
    specialAttackPointer.textContent = ""; 
    specialDefensePointer.textContent = ""; 
    speedPointer.textContent = ""; 
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// MAIN FUNCTIONS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


/**
 * FUNCTION: SEARCH CREATURE
 * It fetches creature data from the API based on the name provided in the search input.
 * It updates the display area with the fetched creature information.
 * 
 * @param {void}
 * @returns {void}
 */
async function searchCreature() {

    // 1) From the searchInputPointer, get the text value of the input
    // 2) Lowercase the input value
    // 3) Remove the whitespace from the input value
    // 4) Then assign the value to creatureNameOrID
    const creatureNameOrID = searchInputPointer.value.toLowerCase().trim();
    
    // Try to fetch the data from the API
    try {
        // Fetch the creature data from the API
        const response = await fetch(`${creatureUrl}${creatureNameOrID}`);

        console.log(response);

        // If the response is not ok, write an alert 
        if (!response.ok) {
            alert("Creature not found")
            return;
        }
    
        // Parse the response to JSON
        const creature  = await response.json();

        // Desconstruct the creature data from the API
        const {
            id,
            name,
            weight,
            height,
            special, // (Not used)
            stats,
            types
        } = creature;

        /*Creature data example:

        { id: 1,
            name: 'Pyrolynx',
            weight: 42,
            height: 32,
            special: 
             { name: 'Blazing Reflex',
               description: 'Increases speed when hit by a Fire-type move.' },
            stats: 
             [ { base_stat: 65, name: 'hp' },
               { base_stat: 80, name: 'attack' },
               { base_stat: 50, name: 'defense' },
               { base_stat: 90, name: 'special-attack' },
               { base_stat: 55, name: 'special-defense' },
               { base_stat: 100, name: 'speed' } ],
            types: [ { name: 'fire' } ] }
          { id: 1,
            name: 'Pyrolynx',
            weight: 42,
            height: 32,
            special: 
             { name: 'Blazing Reflex',
               description: 'Increases speed when hit by a Fire-type move.' },
            stats: 
             [ { base_stat: 65, name: 'hp' },
               { base_stat: 80, name: 'attack' },
               { base_stat: 50, name: 'defense' },
               { base_stat: 90, name: 'special-attack' },
               { base_stat: 55, name: 'special-defense' },
               { base_stat: 100, name: 'speed' } ],
            types: [ { name: 'fire' } ] }
        */

        resetDisplayArea();

        // Update the display text area with the fetched data
        creatureNamePointer.textContent = name.toUpperCase();
        creatureIdPointer.textContent = `#${id}`;
        weightPointer.textContent = `Weight: ${weight}`;
        heightPointer.textContent = `Height: ${height}`;

        // In short words we are creating a span element for EACH type and appending it to the typesPointer element
        types.forEach(typeObj => {
            const typeSpan = document.createElement("span"); // Create a new span element
            typeSpan.textContent = (typeObj.name).toUpperCase(); // Update the text to UPPERCASE name of the type
            typesPointer.appendChild(typeSpan);   // Append the span element to the typesPointer element in the DOM
        });

        // Update the stats table
        hpPointer.textContent = creature.stats[0].base_stat; // Way 1, manually indexing.
        attackPointer.textContent = stats.find(s => s.name === "attack")?.base_stat || "-"; // Way 2, finding the stat by name.
        defensePointer.textContent = stats.find(s => s.name === "defense")?.base_stat || "-";
        specialAttackPointer.textContent = stats.find(s => s.name === "special-attack")?.base_stat || "-";
        specialDefensePointer.textContent = stats.find(s => s.name === "special-defense")?.base_stat || "-";
        speedPointer.textContent = stats.find(s => s.name === "speed")?.base_stat || "-";

    }
    // Catch any errors that may occur and log them to the console
    catch (error) {
            console.error("Error fetching the creature data:", error)
            alert("Error fetching the creature data. Check the console for more information.")
        }
    }; // End of the searchCreature function
// EMPTY LAST LINE, END OF SCRIPT