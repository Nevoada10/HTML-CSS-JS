"""
Admin Space Module

This module provides a AdminSpace class for creating and managing the admin space:
"""

from typing import List # Type hinting
import random

# Example case

# 1st element = full name (string, char*)
# 2nd element = id (int)
# 3rd element = password (string, char*)
# 4th element = dictionary of the subject paired with a list of rounded attendance (int) and rounded grade (float 2f)


student_data = []

"""
Aubrey = {
    "full name": "Aubrey Raven Starfire", 
    "id": 1, 
    "password": "password1",
    "subjects": {"Math": [75, 9.0]}
    }
"""


def create_blank_student() -> dict:
    new_student = {
        "full name": "", 
        "index": 0, 
        "password": "", 
        "subjects": {}
        }
    return new_student


def edit_name(student: dict) -> None:
    student["full name"] = input("Enter new name: ")

def create_id(student: dict) -> None:
    student["index"] = len(student_data) - 1

def edit_password(student: dict) -> None:
    student["password"] = input("Enter new password: ")

student = create_blank_student()
student_data.append(student)


# aux_dic = {subject:[attendance, grade]} = value associated with the key "subjects"
aux_dic = student["subjects"] 

print(aux_dic)



#edit_name(student)
#create_id(student)
#edit_password(student)


print(student)