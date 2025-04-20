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