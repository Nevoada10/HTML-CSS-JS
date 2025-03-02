console.log("JavaScript file is linked");

let all_class_data = [{ // Constant
    name: "English 0",
    teacher: "Ms. Carmen",
    students: ["Uriel Neves Silva"],}];

let all_students_data = []; // Constant

function createClassroom() {
    const classroomNameElement = document.getElementById('classroomNameInput');
    const className = classroomNameElement.value.trim();

    const classroom = {
        name: className,
        teacher: "",
        students: [],
    };

    all_class_data.push(classroom);
    displayClassrooms();
    console.log("Current classrooms:", all_class_data); // Log the updated list
}

/**
 * Displays the list of classrooms in the table
 */
function displayClassrooms() {
    const tableBody = document.getElementById('classroomTableBody');
    tableBody.innerHTML = '';

    all_class_data.forEach((classroom, index) => {
        const newRow = tableBody.insertRow();
        
        const fields = [
            // Display the classroom name
            { key: 'name', value: classroom.name },
            // Display the teacher name
            { key: 'teacher', value: classroom.teacher },
            // Display the number of students
            { key: 'students', value: classroom.students.length }
        ];

        fields.forEach(field => {
            const cell = newRow.insertCell();
            cell.textContent = field.value;

            // Allow the user to edit the classroom name and teacher name
            if (field.key !== 'students') {
                cell.contentEditable = true;
                cell.addEventListener('keydown', (event) => {
                    // On Enter, update the value in the all_class_data array
                    if (event.key === 'Enter') {
                        event.preventDefault();
                        all_class_data[index][field.key] = cell.textContent.trim();
                        console.log("Current classrooms:", all_class_data); // Log the updated list
                    }
                });
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', displayClassrooms);