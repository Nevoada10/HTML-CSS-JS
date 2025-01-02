// =================================================================================
// File Type: JavaScript                                                           |
// Pyramid Generator                                                               |
// Author: Uriel Neves Silva ( https://github.com/Nevoada10 )                      |
// =================================================================================



// Let is used to declare a reasignable variable.
// let character = "Hello" ; 
// let count = 8;
// let rows = [];

// const: prevents reassignment, must be initialized on declaration
const character = "#";
const count = 8;
const rows = [];

function padRow()
{

}
const call = padRow();

// A for loop has three main components: 
// 1. Iterator: initialized and used to keep track of the current loop iteration
// 2. Condition: a boolean expression that is evaluated before each iteration
// 3. Iteration: an expression that is evaluated after each iteration
// A basic for loop takes the following syntax:
// for(iterator; condition; iteration) { 
//   logic; 
// }

for (let i = 0; i < count; i = i + 1) 
    {
    rows.push(character.repeat(i+1));
    console.log(rows);
    }

let result = "";

for (const row of rows) 
    {
    result = result + row + "\n";
    }

console.log(result);

// Loop structure
// for(iterator; condition; iteration) { 
// logic; 
// }

// Array Method: push()
// - Adds element to the end of an array
// - Returns the new length of the array
// let pushed = rows.push("freeCodeCamp"); // returns 4
// console.log(pushed)

// Array Declaration Example
// let rows = ["Naomi","Quincy","CamperChan"]; // Arrays: non-primitive data type that can hold multiple values
// Primitive Data Types in JavaScript
// JavaScript has seven primitive data types

// String: A sequence of characters
// - Can be enclosed in single (') or double (") quotes
// - Represents text-based data

// String Immutability
// - Strings are immutable: once created, their content cannot be changed
// - The variable can be reassigned, but the original string remains unchanged

// Array Methods Demonstration
// push(): Adds elements to the end of an array, returns new length
// rows.push("freeCodeCamp")
// console.log(rows)

// pop(): Removes and returns the last element of an array
// let popped = rows.pop()
// console.log(popped)

// Array Manipulation Examples
// let cities = ["London","New York","Mumbai"];
// console.log(cities)
// cities[2] = "Mexico City";
// console.log(cities)

// Array Indexing and Mutability
// console.log(rows[0]) // Access array values by index, similar to Python
// rows[rows.length-1] = 10; // Dynamically change last element's value

// Arithmetic and Variable Operations (Commented Out)
// console.log(count+1); // Arithmetic operators: +, /, -, *
// console.log(character)
// character = 'World'
// let secondCharacter = character;
// console.log(secondCharacter)