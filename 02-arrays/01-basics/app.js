// Array creation

let fruits = ["Apple", "Orange", "Cherry"];

// Accessing to the character
console.log(`First fruit: ${fruits[0]}}`);
console.log(`Second fruit: ${fruits[1]}`);
console.log(`Last fruit:${fruits[2]}`);

// Replace some values
fruits[2] = "Lemon";
fruits[1] = "Pineapple";

console.log("Fruits: ", fruits);

// Get last elements with "at"

let lastFruit = fruits.at(-1);
console.log(lastFruit); // Lemon

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits.at(-(i+1))); // Lemon, Pineapple, Apple
}

// Methods pop/push, shift/unshift -> mutate original array
let colors = ["Red", "Green", "Blue", "Gray", "Black"];

// Add element at the end of array
colors.push("White");

console.log("New colors: ", colors);

// Add element at the beginning of array
colors.unshift("Marron");

console.log("New colors: ", colors);

// Remove element at the end of array
colors.pop();

console.log("Updated colors: ", colors)

// Remove element at the beginning of array
colors.shift();

console.log("Updated colors: ", colors);

// For loop

const rgbColors = ["Red", "Green", "Blue"];

for (let color of rgbColors ) {
    console.log("color: " + color);
}
