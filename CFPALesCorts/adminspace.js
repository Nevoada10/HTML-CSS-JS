console.log("JavaScript file is linked");

// ) Defining the constants

const classrooms = [
];

const students = []; 

// ) Defining the functions

function createStudent()
{
    const newStudent = {
        name: StudentName,
        subjects: [],
    }
}


function createClassroom() {
    const inputElement = document.getElementById('classroomNameInput');
    const className = inputElement.value.trim();

    const newClassroom = {
        name: className,
        teacher: "",
        students: [],
        link: "View Class",
    };

    classrooms.push(newClassroom);
    displayClassrooms();
    console.log("Current classrooms:", classrooms); // Log the updated list
}


function displayClassrooms() {
    const tableBody = document.getElementById('classroomTableBody');
    tableBody.innerHTML = '';

    // Insert a new row for each object in the classroom
    classrooms.forEach((classroom, index) => {
        const newRow = tableBody.insertRow();

        // For each key in the classroom,  insert a new cell in the current row and set the text content of the cell to the default value
        Object.keys(classroom).forEach(key => { 
            const cell = newRow.insertCell(); 
            cell.textContent = classroom[key];
            cell.textContent = key === 'students' ? classroom[key].length : classroom[key]; 

            // Allow editing of the classroom name and teacher name, but not the students list
            if (key !== 'students' ) {
                cell.contentEditable = true;
            
                  // Add an event listener to handle the Enter key press
                cell.addEventListener('keydown', (event) => {
                    if (event.key === 'Enter') { 
                        event.preventDefault(); // Prevent the default behavior (which would insert a newline)
                       
                        classrooms[index][key] = cell.textContent.trim();  // Update the corresponding property in the classrooms
                        // Log the updated list of classrooms to the console
                        console.log("Current classrooms:", classrooms);
                    }
                });
            }
        });
    });
}




// Main code:

document.addEventListener('DOMContentLoaded', displayClassrooms);

// Show classroom data, console log
console.log("Current classrooms:", classrooms);