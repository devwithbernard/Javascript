// Objects.keys, values, entries

// Object.keys(obj)

const user = {
    name:"John Doe",
    age: 30
};

for (let key of Object.keys(user)) {
    console.log(`${key}: ${user[key]}`);
}

// Object.values
console.log("Infos about user:");

for (let value of Object.values(user)) {
    console.log(`\t${value}`);
}

// Object.entries

for (let [key, value] of Object.entries(user)) {
    console.log(`${key}: ${value}`);
}

//Reflect.ownKeys

user[Symbol('id')] = 1;

for (let key of Object.keys(user)) {
    console.log(key);
}

for (let key of Reflect.ownKeys(user)) {
    console.log(key)
}