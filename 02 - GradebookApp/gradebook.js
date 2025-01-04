// =================================================================================
// File Type: JavaScript                                                           |
// Gradebook Average Calculator 📊                                                            |
// Author: Uriel Neves Silva ( https://github.com/Nevoada10 )                      |
// =================================================================================

/** Part 1
 * Challenge: Class Performance Analysis
 * 
 * As a teacher, you want to quickly calculate the average test score for your class.
 * 
 * Your Task:
 * Implement the `getAverage` function that:
 * - Takes an array of student test scores as input
 * - Computes the arithmetic mean of those scores
 * - Returns the calculated average
 * 
 * Example:
 * getAverage([85, 90, 92, 88, 95]) → 90
 */

function getAverage(scores) // ([int]) -> float
{ 
    let sum = 0;
    // for every element in score
    // for i = 0 to length of scores with iteration i++
    for(let index = 0; index < scores.length; index++) 
    {
        sum += scores[index];
    }
    return sum / scores.length;
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

/** Part 2
 * 🎓 Grade Conversion Challenge
 * 
 * Objective: Transform Numeric Scores into Meaningful Letter Grades
 * 
 * As an educator, you need a systematic way to convert raw test scores 
 * into standardized letter grades that reflect student performance.
 * 
 * Your Mission:
 * Implement the `getGrade` function that:
 * - Takes a numeric score as input
 * - Determines the corresponding letter grade
 * - Returns a string representing the student's academic performance
 * 
 * Grading Scale:
 * - 100       → "A++" 
 * - 90 - 99   → "A"   
 * - 80 - 89   → "B"    
 * - 70 - 79   → "C"  
 * - 60 - 69   → "D"    
 * - 0 - 59    → "F"    (Needs Significant Improvement)
 * 
 * Example:
 * getGrade(95)  → "A"
 */
function getGrade(score) // (int) -> str
{
    if (score == 100){
        return "A++";
    }
    else if (score >= 90){
        return "A";
    }
    else if (score >= 80){
        return "B";
    }
    else if (score >= 70){
        return "C";
    }
    else if (score >= 60){
        return "D";
    }
    else{
        return "F";
    }
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));

/** Part 3
 * 🏆 Passing Grade Verification Challenge
 * 
 * Objective: Determine Student Academic Success
 * 
 * As an educator, you need a quick and reliable method to assess 
 * whether a student has met the minimum academic performance standards.
 * 
 * Your Mission:
 * Implement the `hasPassingGrade` function that:
 * - Takes a student's numeric score as input
 * - Determines if the student has achieved a passing grade (Any grade that is NOT "F" is considered passing)
 * 
 * Problem-Solving Strategy:
 * - Leverage the existing `getGrade` function
 * 
 * Example Scenarios:
 * hasPassingGrade(95)  → true  (Grade: "A")
 * hasPassingGrade(50)  → false (Grade: "F")
 */

function hasPassingGrade(score)
{
    return getGrade(score) != "F"; // return true if the grade is not "F"
}

console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));

/** Part 4
 * 📝 Personalized Student Performance Messaging
 * 
 * Objective: Craft Academic Feedback
 * 
 * As an educator, you want to provide clear, personalized 
 * communication about a student's academic performance.
 * 
 * Your Mission:
 * Implement the `studentMsg` function that:
 * - Takes total class scores and individual student score
 * - Generates a comprehensive, empathetic message
 * - Communicates academic standing with clarity
 * 
 * Message Generation Requirements:
 * - Calculate class average using [getAverage]
 * - Determine student's grade using [getGrade]
 * 
 * Function Requirements:
 * - Input: 
 *   1. Array (total class scores)
 *   2. Number (student's individual score)
 * - Output: String (personalized performance message)
 * 
 * Problem-Solving Strategy:
 * - Utilize existing [getAverage] and [getGrade] functions
 * 
 * Example Scenarios:
 * studentMsg([80, 90, 70], 85)  
 *   → "Class average: 80. Your grade: B. You passed the course."
 * studentMsg([75, 80, 55], 50)  
 *   → "Class average: 70. Your grade: F. You failed the course."
*/ 

function studentMsg(totalScores, studentScore) {
    if (getGrade(studentScore) == "F"){
        return ("Class average: " + getAverage(totalScores) + ". Your grade: " + getGrade(studentScore) + ". You failed the course.");
    }
    else {
        return ("Class average: " + getAverage(totalScores) + ". Your grade: " + getGrade(studentScore) + ". You passed the course.");
    }
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(studentMsg([45, 87, 98, 100, 86, 94, 67, 88, 94, 95], 100));