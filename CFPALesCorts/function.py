def add_classroom(name):

    classroom = {
        "name": name,
        "students": []
    }

    classrooms.append(classroom)

def add_student(name):
    student = {
        "name": name,
        "subjects": []
    }

    students.append(student)

students = []

classrooms = []

add_classroom("Spanish")
add_student("Aubrey")

def add_student_to_classroom(student_name, classroom_name):
    for classroom in classrooms:
        if classroom["name"] == classroom_name:
            classroom["students"].append(student_name)

            for student in students:
                if student["name"] == student_name:
                    student["subjects"].append({
                        "Subject": classroom_name,
                        "Group": "A",
                        "Grade": 0,
                        "Missed Sessions": 0,
                        "Unexcused Absences": 0,
                        "Excused Absences": 0,
                        "Late Arrivals": 0,
                        "Attendance %": 0
                    })
            return
    print(f"Classroom '{classroom_name}' not found.")


print(classrooms)


