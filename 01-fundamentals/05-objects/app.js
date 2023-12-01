// Javascript objects

let emptyObject = {};
console.log( typeof emptyObject); // object

// object properties
let person = {
    firstName: "Konan",
    lastName: "Bernard"
};

const fullName = `${person.firstName} ${person.lastName}`;
console.log(`My name is ${fullName}.`);

// Array-like notation
let user = {
    name: "Chakra",
    profile:"Chakra123",
    notification: 12
};

console.log("User infos : ");
for(let p in user){
    console.log(p, ":", user[p]);
}

// Modify a value of property
user.name = "John Doe";
console.log("user: ", user);

// add a new property to an object
user.credentials = "$2y$10$dxi7qpUM6zn3uEL.JcHFtuvtkFG.6714Tjuc5Oq5gs3w23ausRlgm";
console.log(user);

// checking if a property exists

if('credentials' in user){
    console.log("user is already signed up!");
}else{
    console.log("Please, sign up");
}