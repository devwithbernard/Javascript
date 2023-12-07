// Variable declaration and initialisation
let message = "Hello world";
console.log(message);

// ReInitialisation
message = "Bye everyone!";
console.log("New value of message variable: ",message);

// Undefined vs. undeclared variables
let cat;
console.log(cat); // undefined because 'cat' variable hasn't been assigned

//console.log(dog); // dog is not declared

// Constants
const workDayLength = 5;
const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday', 'Saturday', 'Sunday'];
const workingDays = [];

for(let i = 1; i <= workDayLength; i++){
    let date = new Date(2023, 11, i)
    workingDays.push(daysOfWeek[date.getDate() - 1]);
}

workingDays.forEach((day, index) =>{
    console.log(`N°${index + 1}: ${day}`)
});

