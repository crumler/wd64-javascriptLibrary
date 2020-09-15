//! Challenge 2: Take Home Challenge
/*  
Create a switch statement that takes in a value (number) that represents a grade.  If it is True, console log that they are passing with the correct letter grade.
*   A: 89-100
*   B: 79-88
*   C: 66-78
*   D: 59-65
*   F: 0-59
*/

let gradeScore = 48;

switch(gradeScore) {
    case (gradeScore >= 59) :
        console.log(`You are currently passing with a letter grade of ${gradeScore}`);
        break;
    case (gradeScore <= 58) :
        console.log(`You are currently failing with a letter grade of ${gradeScore}`);
        break;
    default:
        console.log('Ummm......we seemed to have lost your grade');
}