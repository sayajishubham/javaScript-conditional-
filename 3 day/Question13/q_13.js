let marks_Maths = prompt("Enter your Maths Marks:"); 
let marks_Science = prompt("Enter Your Science Marks:");
let marks_Social_Science = prompt("Enter Your Social Science Marks:"); 
let marks_Hindi = prompt("Enter Your Hindi Marks:"); 
let marks_English = prompt("Enter Your English Marks:"); 

// Convert the input values to numbers
marks_Maths = Number(marks_Maths); 
marks_Science = Number(marks_Science); 
marks_Social_Science = Number(marks_Social_Science); 
marks_Hindi = Number(marks_Hindi); 
marks_English = Number(marks_English);

// Calculate the total marks
let result = marks_Maths + marks_Science + marks_Social_Science + marks_Hindi + marks_English;

console.log("Total Marks:", result);


// Calculate the percentage
let percentage = (result * 100) / 500;


console.log("Percentage:", percentage);


if (percentage >= 90 && percentage <= 100) {
    console.log("Your Grade is A++");
} else if (percentage >= 80 && percentage < 90) {
    console.log("Your Grade is A");
} else if (percentage >= 70 && percentage < 80) {
    console.log("Your Grade is B");
} else if (percentage >= 60 && percentage < 70) {
    console.log("Your Grade is C");
} else if (percentage >= 50 && percentage < 60) {
    console.log("Your Grade is D");
} else if (percentage >= 40 && percentage < 50) {
    console.log("Your Grade is E");
} else if (percentage >= 33 && percentage < 40) {
    console.log("Your Grade is F");
} else {
    console.log("You are Fail.");
}

