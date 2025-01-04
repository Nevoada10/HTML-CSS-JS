const character = "#";
const count = 6;
const rows = [];


function padRow(rowNumber, rowCount) 
{
    // Calculate the number of spaces needed on the left side of the pyramid row
    const Padding = " ".repeat(rowCount - rowNumber);

    // Calculate the number of characters to form the pyramid structure for the current row
    // The formula (2 * rowNumber) - 1 gives the number of characters needed for the pyramid at the given row
    const pyramidCharacters = character.repeat((2 * rowNumber) - 1);

    // Concatenate the left padding, pyramid characters, and right padding to form the complete row
    // Right padding is same as left padding to center the pyramid
    return Padding + pyramidCharacters + Padding;
}

function drawUpwardPyramid(rows)
{
    while (rows.length < count) // each element is a row of a string
    {
        rows.push(padRow(rows.length+1,count));
    }
}


function drawDownwardPyramid(rows)
{   // if count = 6, iterates 6 to 1.
    for (let index = count; index > 0; index--) // each element is a row of a string
    {
        rows.push(padRow(index,count));
    }
}


function prints(rows)
{
    // This function prints the rows array to the console
    // This is mainly for debugging purposes
    console.log("Matrix:",rows); // Print the entire matrix
    console.log("Index of the first line:",rows.indexOf(rows[0])); // Print the index of the first line
    console.log("Index of the last line:",rows.indexOf(rows[rows.length-1])); // Print the index of the last line
    console.log("Number of lines:",rows.length); // Print the total number of lines
    console.log("Last line's length:",rows[rows.length-1].length); // Print the length of the last line
}


drawUpwardPyramid(rows);
prints(rows);




