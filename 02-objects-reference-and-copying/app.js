/*
 * Objects Reference And Copying
 */

// Primitive values copying

let message = "Hello";
let phrase = message;

// Before modifying message variable
console.log("message: " + message);
console.log("phrase: " + phrase);

message = "Hello world";

// After modifying message variable
console.log("message: " + message);
console.log("phrase: " + phrase);

// Reference copying

let user = {
    name: "John Doe"
};

let admin = user;

// Before modifying admin
console.log("User: ", user);
console.log("Admin: ", admin);

admin.name = "Pete";

// After modifying admin
console.log("User: ", user);
console.log("Admin: ", admin);

// Comparison by reference
let post = {
    id: 1,
    title: "Post 1"
};

let article = post;

if(article === post) {
    console.log("Same reference");
}else{
    console.log("Two different object");
}

// Cloning and merging, Object.assign
let gamer = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};

const gamerCloned = Object.assign({}, gamer);

// before modifying gamerCloned
console.log("Gamer: ", gamer);
console.log("Gamer cloned: ", gamerCloned);

gamerCloned.sizes.height = 187;

// After modifying gamerCloned
console.log("Gamer: ", gamer);
console.log("Gamer cloned: ", gamerCloned);

// For fixing that, use structuredClone
const cGamer = structuredClone(gamer);

cGamer.sizes.height = 185;

console.log("Gamer: ", gamer);
console.log("cGamer: ", cGamer);