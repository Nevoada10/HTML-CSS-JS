/* File Type: JavaScript
 * Cash Register
 * Author: Uriel Neves Silva ( https://github.com/Nevoada10 )
 */

// This is a simple webpage that allows users to search for Pokémon by name and view detailed information about them.

// ================================
// Classes and IDs in pokemon.html
// ================================

/* #IDs:
    Form: (1)
        search-form: Container for the search form. 

    Div: (4)
        display-area: Container for displaying Pokémon information.
        name-and-id: Container for Pokémon's name and ID.
        weight-and-height: Container for Pokémon's weight and height.
        abilities: Container for Pokémon's abilities and stats.

    Span: (13)
        pokemon-name: Element for displaying the name of the Pokémon.
        pokemon-id: Element for displaying the ID of the Pokémon.
        weight: Element for displaying the weight of the Pokémon.
        height: Element for displaying the height of the Pokémon.
        types: Element for displaying the types of the Pokémon.
        pokemon-image: Element for displaying the image of the searched Pokémon.

        stats-table: Table displaying the Pokémon's stats.
        hp: Displays the Pokémon's HP.
        attack: Displays the Pokémon's Attack.
        defense: Displays the Pokémon's Defense.
        special-attack: Displays the Pokémon's Special Attack.
        special-defense: Displays the Pokémon's Special Defense.
        speed: Displays the Pokémon's Speed.

    Table: (1)
        stats-table: Table displaying the Pokémon's stats.
*/

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// GLOBAL VARIABLES
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// Search Form (SEARCH BAR)
const searchForm = document.getElementById("search-form"); // 1
const searchInput = document.getElementById("search-input"); // 2

// Display Area (TOP CONTAINER)

const pokemonName = document.getElementById("pokemon-name"); // 3
const pokemonId = document.getElementById("pokemon-id"); // 4
const weight = document.getElementById("weight"); // 5
const height = document.getElementById("height"); // 6
const pokemonImage = document.getElementById("pokemon-image"); // 7
const types = document.getElementById("types"); // 8

// Display Area (BOTTOM CONTAINER)

const hp = document.getElementById("hp"); // 9
const attack = document.getElementById("attack"); // 10
const defense = document.getElementById("defense"); // 11
const specialAttack = document.getElementById("special-attack"); // 12
const specialDefense = document.getElementById("special-defense"); // 13
const speed = document.getElementById("speed"); // 14



    

