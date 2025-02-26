let all_class_data = [];
let all_students_data = [];

function createClassroom(class_name) {
    let newClassroom = {
        name: class_name,
        teacher: "",
        students: [],
    };
    all_class_data.push(newClassroom);
    console.log(all_class_data);
}

function changeTeacher(class_name, teacher_name) {
    // Find the classroom with the given name
    for (let i = 0; i < all_class_data.length; i++) {
        if (all_class_data[i].name === class_name) {
            // Change the teacher
            all_class_data[i].teacher = teacher_name; 
            break;
        }
    }
}

function createStudent(name) {
    let newStudent = {
        full_name: name,   
        password: "", 
        id: all_students_data.length + 1, 
        subjects: {}
    }
    all_students_data.push(newStudent);
}

function addStudentToClass(student_name, class_name) {
    // Find the student with the given name
    for (let i = 0; i < all_students_data.length; i++) {
        if (all_students_data[i].full_name === student_name) {
            // Find the classroom with the given name
            for (let j = 0; j < all_class_data.length; j++) {
                if (all_class_data[j].name === class_name) {
                    // Add the student to the classroom
                    all_class_data[j].students.push(student_name);
                    // Add the class name to the student's subjects linked to a list with attendance and grade
                    all_students_data[i].subjects[class_name] = { attendance: 0, grades: 0 };
                    break;
                }
            }
            break;
        }
    }
}

createClassroom("English 0");
createClassroom("Spanish 2");
createClassroom("Catalan 2")

changeTeacher("English 0", "Ms. Carmen");
changeTeacher("Spanish 2", "Ms. Carmen");
changeTeacher("Catalan 2", "Ms. Laura");

createStudent("Nicolás Alejandro López");
createStudent("Esteban Andrés Fernández");
createStudent("Carlos Benjamín Álvarez");

addStudentToClass("Nicolás Alejandro López", "English 0");
addStudentToClass("Nicolás Alejandro López", "Spanish 2");

addStudentToClass("Esteban Andrés Fernández", "Spanish 2");
addStudentToClass("Carlos Benjamín Álvarez", "Catalan 2");

console.log(all_students_data);

console.log("list of classes:",all_class_data);

// console.log(all_students_data[0].subjects);
