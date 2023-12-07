// Constructor, 'new' operator

function User(name, age) {
    this.name = name;
    this.age = age;
    this.isAdmin = false;
}

/**
 *
 * @type {User}
 */
const user = new User("Jack", 30);

console.log(user);

// Methods in the constructor
function Person(name){
    this.name = name;
    this.sayHi = function() {
        console.log("Hello " + this.name);
    }
}

const person = new Person("John Doe");
person.sayHi();
