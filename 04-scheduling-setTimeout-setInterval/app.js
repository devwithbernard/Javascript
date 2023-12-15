// TODO - Scheduling : SetTimeout

setTimeout(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => response.json())
        .then(todo => console.log(todo))
        .catch(error => console.log(error));
}, 2000); // Execute the anonymous function after 2 seconds.


setTimeout(() => {
    console.log("Hello setTimeout");
}, 1000);

// With arguments
const timerId = setTimeout((message) => {
    console.log(`Message: ${message}`);
}, 1000, 'I love Javascript!');

clearTimeout(timerId);

console.log(timerId);

// TODO - Scheduling : setInterval

let counter = 1;

const intervalId = setInterval(() => {

    fetch(`https://jsonplaceholder.typicode.com/todos/${counter}`)
        .then(response => response.json())
        .then(todo => {
            console.log(`Todo ${counter}:`, todo);
            counter++;
        })

    if (counter === 5) {
        console.log("End of fetching todo ...");
        clearInterval(intervalId);
    }

}, 1000);

// Nested setTimeout -> Alternative to setInterval
let timerID = setTimeout(function tick(){
    console.log("tick");
    timerID = setTimeout(tick, 2000);
}, 2000); // executing repetitively each 2 seconds
