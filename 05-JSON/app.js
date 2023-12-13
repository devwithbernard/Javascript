// JSON methods, toJSON

let user = {
    name: 'John Doe',
    age: 30,
    toString(){
        return `{name:${this.name}, age:${this.age}}`
    }
};

console.log(user.toString());

user["isAdmin"] = false;

user.toString = function () {
    return `{name:${this.name}, age:${this.age}, isAdmin:${this.isAdmin}}`
}

console.log(user.toString());

// JSON.stringify

let student = {
    name: 'Souleymane Mamadou',
    age: 22,
    isAdmin: false,
    courses: ['HTML', 'CSS', 'JavaScript'],
    spouse: null,
    toString() {
        return JSON.stringify(this);
    }
};

console.log(student.toString())

let json = JSON.stringify(student);

console.log(typeof json); // string
console.log('Student:', json);

// Some Javascript-specific object properties are skipped

let person = {
    sayHi() {
        console.log("Hello Mark");
    },
    [Symbol('id')]: 123,
    infos: undefined,
};

console.log('person:', JSON.stringify(person)); // person: {} -> empty object

// Custom toJSON
let room = {
    number: 123,
    space:'22x25',
    toJSON(){
        return this.number;
    }
}

console.log(JSON.stringify(room));

// JSON.parse

const superHeroesJSON = [];

const superHeroes = JSON.parse(superHeroesJSON);
console.log(superHeroes);