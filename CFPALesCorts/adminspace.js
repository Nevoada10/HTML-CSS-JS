console.log("JavaScript file is linked");

let all_class_data = [{ // Constant
    name: "English 0",
    teacher: "Ms. Carmen",
    students: ["Uriel Neves Silva"],}];

let all_students_data = []; // Constant

function createClassroom() {
    console.log("Button clicked!");  // Add this to verify click
    const classroomNameElement = document.getElementById('classroomNameInput');
    const className = classroomNameElement.value.trim();

    console.log("Classroom name:", className);  // Log the input value

    const classroom = {
        name: className,
        teacher: "",
        students: [],
    };

    all_class_data.push(classroom);
    displayClassrooms();
    console.log("Current classrooms:", all_class_data); // Log the updated list
}

function displayClassrooms() {
    // Get the table body where we'll insert rows
    const tableBody = document.getElementById('classroomTableBody');
    
    // Clear existing rows first (optional, but prevents duplicate entries)
    tableBody.innerHTML = '';

    // Iterate through each classroom in the list
    all_class_data.forEach((classroom, index) => {
        // Create a new row for each classroom
        const newRow = tableBody.insertRow();
        
        // Add cells with classroom details
        newRow.insertCell(0).textContent = classroom.name;
        newRow.insertCell(1).textContent = classroom.teacher || "Not assigned";
        newRow.insertCell(2).textContent = classroom.students.length;
        
        // Optional: Add a unique identifier or index
        newRow.dataset.classroomId = index;
    });
}

// Call this function when the page loads or when you want to refresh the table
document.addEventListener('DOMContentLoaded', displayClassrooms);