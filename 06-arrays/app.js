// Javascript arrays
const array = [1,'a',true, null];

// index: value
for(let i = 0; i < array.length; i++){
    console.log(`${i}: ${array[i]}`);
}

// Array is assigned as reference
const copyArray = array;

console.log("Copied array before modification of original array:", copyArray)

array.push("final value");

console.log("Original array: ", array);
console.log("Copied array: ", copyArray);


// Creating Javascript array
let colors = ["blue", "green", "red"];

// accessing array elements
console.log(`First element: ${colors[0]}`);
console.log(`second element: ${colors[1]}`);
console.log(`third element: ${colors[2]}`);

// change a value of an element
colors[2] = "orange";

console.table(colors);

// Getting the array size
const cars = ["Toyota", "Chevrolet"];
console.log(`They are ${cars.length} cars available.`);

/**
 * @returns {{id: number, title: string, body: string}}
 */
function getPost(){
    return {
        id: 1,
        title:"",
        body:""
    }
}

const d = getPost()