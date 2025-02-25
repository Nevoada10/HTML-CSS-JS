let student_data = [];

function create_student() {
    let newStudent = {
        "full name": "",
        "id": student_data.length + 1,
        "password": "",
        "subjects": {}
    };
    student_data.push(newStudent);
    console.log(student_data);
}
