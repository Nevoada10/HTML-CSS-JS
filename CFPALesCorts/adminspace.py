"""
Admin Space Module

This module provides a AdminSpace class for creating and managing the admin space:
"""

from typing import List # Type hinting
import random

# List of dictionaries of fictional users

students = [
    {"id": 1, "name": "Alice"},
    {"id": 2, "name": "Bob"},
    {"id": 3, "name": "Charlie"} 
]

# Available subjects

subjects = [ "Mathematics", "Computer Science", "Physics", "English", "History", "Spanish" ]

for student in students:
    print(student)