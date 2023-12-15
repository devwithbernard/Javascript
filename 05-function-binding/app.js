// TODO: Function binding

// Losing 'this'
let user = {
    firstName: "John",
    greet() {
        console.log("Hello " + this.firstName + "!");
    }
}

user.greet();

setTimeout(user.greet, 1000); // 'Hello undefined', 'this' represents timer object in Nodejs environment

// Solution 1 : a wrapper

setTimeout(function(){
    user.greet();
}, 1000);

// or shorter
setTimeout(() => user.greet(), 1000);

// Solution 2: binding

function bindSer() {
    console.log(`Hello, I'm ${this.firstName}`);
}

let greetUser = bindSer.bind(user);

greetUser()

// With object method
setTimeout(user.greet.bind(user), 1000);