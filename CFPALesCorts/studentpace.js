console.log("studentpace.js was loaded");

let students = [];
let classrooms = [];

// student structure
// each student is a dictionary with the following keys:
// name: string
    // subjects:  LIST of DICTIONARIES with the following keys:
// name: string
// group: string
// grade: string
// missedSessions: int
// unexcusedAbsences: int
// excusedAbsences: int
// lateArrivals: int
// attendancePercentage: int

const student1 = {
    name: "John Doe",
    subjects: [
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

// classroom structure
// each classroom is a dictionary with the following keys:
// name: string
// students: LIST of student objects (dictionaries)

const classroom1 = {
    name: "Classroom 1",
    students: [student1, student2]
};

students.push(student1, student2);
classrooms.push(classroom1);

/**
 * Display all students in the students array in the #students-container
 * Each student is represented as a card with their name and a table of their subjects
 * Each row in the table represents a subject and contains their group, grade, missed sessions, unexcused absences, excused absences, late arrivals, and attendance percentage
 */
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