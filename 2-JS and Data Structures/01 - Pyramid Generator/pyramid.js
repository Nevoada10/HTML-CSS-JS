// =================================================================================
// File Type: JavaScript                                                           |
// Pyramid Generator                                                               |
// Author: Uriel Neves Silva ( https://github.com/Nevoada10 )                      |
// =================================================================================

const character = "#";
const count = 8;
const rows = [];

/**
 * Generates a padded row for a pyramid pattern
 * 
 * @param {number} rowNumber - The current row number in the pyramid
 * @param {number} rowCount - The total number of rows in the pyramid
 * @returns {string} A formatted row with spaces and characters to create a pyramid shape
 * 
 * @description
 * This function creates a single row of the pyramid by:
 * 1. Adding leading spaces to center the row
 * 2. Adding the character repeated for the current row
 * 3. Adding trailing spaces to maintain symmetry
 * 
 * @example
 * padRow(3, 5) might return "  ###  "
 */
function padRow(rowNumber, rowCount) // (int, int) -> str
{
    return " ".repeat(rowCount-rowNumber) + character.repeat((2*rowNumber)-1) + " ".repeat(rowCount-rowNumber);
}

// Flag to control pyramid orientation
let inverted = false;

/**
 * Generates pyramid rows based on the specified count and orientation
 * 
 * @description
 * Populates the 'rows' array with pyramid rows, either in standard or inverted order
 * Uses the global 'inverted' flag to determine row generation method
 * 
 * @example
 * // With inverted = false, rows will be generated from bottom to top
 * // With inverted = true, rows will be generated from top to bottom
 */
for (let i = 1; i <= count; i++) {
    if (inverted) {
      rows.unshift(padRow(i, count));
    } else {
      rows.push(padRow(i, count));
    }
}

/**
 * Converts pyramid rows into a single formatted string
 * 
 * @description
 * Iterates through the rows array and concatenates each row
 * with a newline character to create a printable pyramid
 */
let result = "";

for (const row of rows) 
    {
    result = result + row + "\n";
    }

/**
 * Outputs the final pyramid pattern to the console
 * 
 * @description
 * Prints the complete pyramid pattern generated from the rows
 */
console.log(result);

/*
{{ ... }}

/**
 * JavaScript Fundamentals: Beginner's Crash Course
 * 
 * @class JavaScriptBasics
 * @description A comprehensive overview of core JavaScript concepts
 * 
 * 1. Variable Declarations
 * - 'let': Mutable variable that can be reassigned
 * - 'const': Immutable variable that cannot be reassigned
 * 
 * @example
 * let dynamicValue = 10;       // Can be reassigned
 * const PI = 3.14159;          // Cannot be reassigned
 * 
 * 2. Primitive Data Types
 * - String: Text data
 * - Number: Numeric values (integer, float, bigint)
 * - Boolean: true/false values
 * - Undefined: Variable declared but not assigned
 * - Null: Intentional absence of any object value
 * - Symbol: Unique identifier
 * 
 * @example
 * let name = "John";           // String
 * let age = 30;                // Number
 * let isStudent = true;        // Boolean
 * let car;                     // Undefined
 * let empty = null;            // Null
 * 
 * 3. Equality Operators
 * - === : Strict equality (value and type)
 * - !== : Strict inequality
 * - == : Loose equality (type conversion)
 * - != : Loose inequality
 * 
 * @example
 * console.log("0" === 0);      // false (strict)
 * console.log("0" == 0);       // true (loose)
 * 
 * 4. Conditional Statements
 * - if/else for decision making
 * - Truthy/Falsy values
 * 
 * @example
 * if (condition) {
 *   // Executed if condition is true
 * } else {
 *   // Alternative path
 * }
 * 
 * 5. Loops
 * - for: Iterate a known number of times
 * - while: Iterate while a condition is true
 * 
 * @example
 * for (let i = 0; i < 5; i++) {
 *   // Repeated execution
 * }
 * 
 * while (condition) {
 *   // Conditional execution
 * }
 * 
 * 6. Array Methods
 * - push(): Add element to end
 * - pop(): Remove last element
 * - unshift(): Add element to start
 * - shift(): Remove first element
 * 
 * @example
 * let arr = [1, 2, 3];
 * arr.push(4);        // [1, 2, 3, 4]
 * arr.pop();          // Removes 4
 * arr.unshift(0);     // [0, 1, 2, 3]
 */
