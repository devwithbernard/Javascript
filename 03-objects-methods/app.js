// Objects methods, "this"

let user = {
    name: "John",
    age: 30
};

user.sayHello = function () {
    console.log("Hello " + user.name);
}

user.sayHello();

// object method and 'this' use case
let person = {
    name: "Bernard Konan",
    age: 32,
    sayHi() {
        console.log(`Hello ${this.name}!`);
    }
};

person.sayHi();

// Arrow functions have no "this"
person = {
    job: "Engineer",
    displayInfo() {
        let arrow = () => console.log(this.job);
        arrow();
    }
};

person.displayInfo();