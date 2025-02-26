console.log("JavaScript file is linked");

let all_class_data = [];
let all_students_data = [];

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
    console.log("Current classrooms:", all_class_data);
}