// ) Defining the constants

const student1 = {
    name: "John Doe",
    subjects: [
        {
            name: "All Students",
            group: "None",
            grade: "0",
            missedSessions: 0,
            unexcusedAbsences: 0,
            excusedAbsences: 0,
            lateArrivals: 0,
            attendancePercentage: 100
        },
        {
            name: "Math",
            group: "A",
            grade: "A",
            missedSessions: 0,
            unexcusedAbsences: 0,
            excusedAbsences: 0,
            lateArrivals: 0,
            attendancePercentage: 100
        },
        {
            name: "Science",
            group: "B",
            grade: "B",
            missedSessions: 0,
            unexcusedAbsences: 0,
            excusedAbsences: 0,
            lateArrivals: 0,
            attendancePercentage: 100
        }
    ]
};

const student2 = {
    name: "Jane Doe",
    subjects: [
        {
            name: "All Students",
            group: "None",
            grade: "0",
            missedSessions: 0,
            unexcusedAbsences: 0,
            excusedAbsences: 0,
            lateArrivals: 0,
            attendancePercentage: 100
        },
        {
            name: "English",
            group: "C",
            grade: "C",
            missedSessions: 0,
            unexcusedAbsences: 0,
            excusedAbsences: 0,
            lateArrivals: 0,
            attendancePercentage: 100
        }
    ]
};


const students = [student1, student2];

// class

const classrooms = [{
    name: "All Students",
    teacher: "",
    students: [student1],
    link: "View Class",
}];

// ) Defining the functions

function createStudent() {
    const inputElement = document.getElementById('studentNameInput');
    const studentName = inputElement.value.trim();
    if (studentName === "") {
        alert("Please enter a student name");
        return;
    }
    const newStudent = {
        name: studentName,
        subjects: [
            {
                name: "All Students",
                group: "GES",
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

    // Sort the students by name
    students.sort((a,b) => a.name.localeCompare(b.name));
    

    // Create a card for each student
    students.forEach(student => {
        if (student.name.toLowerCase().includes(searchInput.value.toLowerCase())) {
        const studentDiv = document.createElement('div');
        studentDiv.classList.add('student-card');

        const searchInput = document.getElementById("searchInput")

        // Display h2 element with the student name 
        const studentName = document.createElement('h2');
        studentName.textContent = student.name;
        studentDiv.appendChild(studentName); // Append the h2 element to the student card

        // Display a table with the student's data
        const subjectsTable = document.createElement('table');
        subjectsTable.setAttribute('border', '1'); // Add a border of 1 to the table
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

        // Get the tbody element
        const tbody = subjectsTable.querySelector('tbody');

        // Create a row for each subject
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

        // Append the table to the student card
        studentDiv.appendChild(subjectsTable);
        container.appendChild(studentDiv);
    }});
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

function filterStudents() {
    displayStudents();
}


// Main code:

// Run displayClassrooms when page is loaded.
document.addEventListener('DOMContentLoaded', displayClassrooms);
document.addEventListener('DOMContentLoaded', displayStudents);

// Show classroom data, console log
console.log("Current classrooms:", classrooms);