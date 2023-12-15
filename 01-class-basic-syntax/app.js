/*

In object-oriented programming, a class is an extensible program-code-template for creating objects,
providing initial values for state (member variables) and implementations of behavior (member functions or methods)

*/

// Class basic syntax

class User {
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }
    // Getters
    get name() {
        return this.name;
    }

    //Setters
    set name(value) {

        if (!(value.length > 4)) {
            console.log("Name is too short.");
            return;
        }

        this.name = value;
    }

    get age() {
        return this.age;
    }

    set age(value) {
        if(!value) {
            console.log("Age not valid!")
            return;
        }
        this.age = value;
    }

    // method
    str() {
        return `${this.name}, ${this.age}`;
    }
}

// Create 10 users and print

const users = [];

for (let i = 0; i < 10; i++) {
    users.push(new User('User ' + (i + 1), i + 10));
}

users.forEach(user => console.log(user.str()));

