// Class inheritance

/*
    Class inheritance is a way for one class to extend another class.

    So we can create new functionality on top of the existing.
 */
/**
 *
 */
class Animal{
    constructor(name) {
        this.name = name;
        this.speed = 0;
        this.numberOfLegs = 4;
    }

    run(speed = 0) {
        this.speed = speed;

        return `${this.name} runs with speed ${this.speed}km/h.`;
    }

    stop(){
        this.speed = 0;

        return `${this.name} stops running!`;
    }
}

// Create Rabbit class
class Rabbit extends Animal{
    hide() {
        return `${this.name} hides!`;
    }
}

let rabbit = new Rabbit('White Rabbit');
console.log(rabbit.run(10));
console.log(rabbit.hide());

// Overriding a method
class Cat extends Animal{
    stop() {
        console.log(`${this.name} stops running and starts to meow!`)
    }
}

const cat = new Cat('Gabi');

cat.stop();

// Overriding Constructor
class Dog extends Animal{
    constructor(name, earLength) {
        super(name);
        this.speed = 0;
        this.earLength = earLength;
    }

    run(speed) {
        this.speed = speed;
        return `The ${this.name} starts running!`;
    }
}