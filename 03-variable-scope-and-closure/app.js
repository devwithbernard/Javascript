// Block Scope : const and let

{
    let message = "Hello world";
    console.log("Message:", message);
}

//console.log(message || 'Message is not defined'); // Error: message is not defined

if (true) {
   let phrase = "Hello!";
   console.log(phrase);
}
// console.log(phrase) Phrase is not defined

// Nested function or closure
function makeCounter() {
    let count = 0;

    return  () => {
        return count++;
    }
}

const counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
