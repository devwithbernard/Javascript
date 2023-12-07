/*
* Objects in javascript
 */

// empty object
let user = {};

// literals and properties
user = {
    name: "John Doe",
    age: 30,
};
function setProperty(obj, key, value) {
    obj[key] = value;
}

// Accessing to the user properties
console.log("user name: " + user.name);
console.log("user age: " + String(user.age) + ' years old.');

// Add property to literal object
user.isAdmin = true;
user.job = "Mobile Dev";

console.log('user: ' + String(JSON.stringify(user)));

// Delete a property
delete user.job;

console.log("new user: ", user);

// multiword property names

setProperty( user,"likes birds", true);

console.log(user);

// let key = window.prompt("What do you want to know about the user?", "name");
//
// if(key.length > 0) {
//     setProperty(user, key, undefined);
//     console.log(user);
// }

// Property value shorthand
const makeUser = (name, age) => {
    return {
        name:name,
        age: age
    }
}

const user2 = makeUser("Jack Ma", 55);
console.log(user2);

// We can write makeUser function like this using property value shorthand
/**
 * @typedef {string, age} user
 *
 * @param {string} name
 * @param {number} age
 * @return {user}
 */
const createUser = (name, age) => {
    return { name, age}
}

const user3 = createUser("Jules Vernes", 58);
console.log(user3);

// Property existence test, "in" operator
const person = {};

if(person.name === undefined) {
    console.log("'name' property not exists.");
}

// check if property exists in person object
person.name = "Konan";
person.age = 27;
// person.isAdmin = false;

if('isAdmin' in person) {
    console.log(`${person.name} has possibly admin role.`);
}else{
    console.log("No admin role");
}

// The "for ... in" loop
async function getUsers() {
    const URL = "https://jsonplaceholder.typicode.com/users";

    try {
        const response = await fetch(URL);
        const users = await response.json();

        if(users !== undefined && users.length > 0) {
            return users;
        }
    } catch (error) {
        console.log(error);
    }
}

getUsers()
    .then((users) => {
        if(users.length > 0) {
            let user = users[0];

            for (let key in user) {
                if (typeof user[key] === "object") {
                    console.log(key + ": ")
                    for (let k in user[key]) {
                        console.log(`\t${k}`);
                    }
                } else {
                    console.log(key);
                }
            }
        }
    }).catch((error) => console.log(error));

