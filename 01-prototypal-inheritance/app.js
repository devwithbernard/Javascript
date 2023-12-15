// Prototypal inheritance

let user = {
    name: "Jack Doe",
    age: 30
};

let guest = {
    name: 'John',
    isGuest: true
}

guest.__proto__ = user;

console.log('Infos:');
console.log('\t', guest.name, ',', guest.age + ' years old.');

// Animal prototype

let animal = {
    eats: true,
    walk(){
        console.log('Animal walks!');
    }
}

let rabbit = {
    jumps: true,
    __proto__: animal
};

let longEar = {
    earLength: 10,
    __proto__: rabbit
};

console.log("LongEar:");
console.table([longEar.eats, longEar.jumps, longEar.earLength]);