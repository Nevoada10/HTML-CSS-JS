// ) Defining the constants

const students = [];



// class

const classrooms = [{
    name: "All Students",
    teacher: "",
    students: [],
    link: "View Class",
}];

// ) Defining the functions

function createStudent() {
    const inputElement = document.getElementById('studentNameInput');
    const studentName = inputElement.value.trim();
    const newStudent = {
        name: studentName,
        subjects: [
            {
                name: "All Students",
                group: "",
                grades: [],
                missed_sessions: 0,
                unexcused_absences: 0,
                excused_absences: 0,
                late_arrivals: 0,
                attendance: 0,
            },
        ],
    };
    students.push(newStudent);
    classrooms[0].students.push(newStudent.name);
    console.log("Current students:", students); // Log the updated list
    displayClassrooms();
    displayStudents();
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
    console.log("Current classrooms:", classrooms); // Log the updated list
    displayClassrooms();
}

function displayStudents() {
    const container = document.getElementById('students-container');
    container.innerHTML = '';

    students.forEach(student => {
        const studentDiv = document.createElement('div');
        studentDiv.classList.add('student-card');

        const studentName = document.createElement('h2');
        studentName.textContent = student.name;
        studentDiv.appendChild(studentName);

        const subjectsTable = document.createElement('table');
        subjectsTable.innerHTML = `
            <thead>
                <tr>
                    <th>Subject</th>
                    <th>Group</th>
                    <th>Grade</th>
                    <th>Missed Sessions</th>
                    <th>Unexcused Absences</th>
                    <th>Excused Absences</th>
                    <th>Late Arrivals</th>
                    <th>Attendance %</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        `;
        const tbody = subjectsTable.querySelector('tbody');

        student.subjects.forEach(subject => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${subject.name}</td>
                <td>${subject.group}</td>
                <td>${subject.grade}</td>
                <td>${subject.missedSessions}</td>
                <td>${subject.unexcusedAbsences}</td>
                <td>${subject.excusedAbsences}</td>
                <td>${subject.lateArrivals}</td>
                <td>${subject.attendancePercentage}</td>
            `;
            tbody.appendChild(row);
        });

        studentDiv.appendChild(subjectsTable);
        container.appendChild(studentDiv);
    });
}

// Call the function to display students when the page loads
document.addEventListener('DOMContentLoaded', displayStudents);

function displayClassrooms() {
    const tableBody = document.getElementById('classroomTableBody');
    tableBody.innerHTML = '';

    // Insert a new row for each object in the classroom
    classrooms.forEach((classroom, index) => {
        const newRow = tableBody.insertRow();

        // For each key in the classroom, insert a new cell in the current row and set the text content of the cell to the default value
        Object.keys(classroom).forEach(key => { 
            const cell = newRow.insertCell(); 
            cell.textContent = key === 'students' ? classroom[key].length : classroom[key]; 

            // Allow editing, but not the students list
            if (key !== 'students' && key !== 'link') {
                cell.contentEditable = true;
            
                // Add an event listener to handle the Enter key press
                cell.addEventListener('keydown', (event) => {
                    if (event.key === 'Enter') { 
                        event.preventDefault(); // Prevent the default behavior (which would insert a newline)
                       
                        classrooms[index][key] = cell.textContent.trim();  // Update the corresponding property in the classrooms
                        // Log the updated list of classrooms to the console
                    }
                });
            }
        });
    });
}



// Main code:

// Run displayClassrooms when page is loaded.
document.addEventListener('DOMContentLoaded', displayClassrooms);
document.addEventListener('DOMContentLoaded', displayStudents);

// Show classroom data, console log
console.log("Current classrooms:", classrooms);