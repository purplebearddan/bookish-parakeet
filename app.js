class Animal {
    constructor(name, age, eyeColor) {
        this.name = name;
        this.age = age;
        this.eyeColor = eyeColor;
    }

    speak() {
        return "Makes a noise";
    }
}

const storedAnimal = new Animal("Dave", 9, "Blue");

window.addEventListener("load", () => {
    localStorage.setItem("classObject", JSON.stringify(storedAnimal));
});

const readAnimalButton = document.querySelector("#readAnimal");

readAnimalButton.addEventListener("click", () => {
    let readAnimal = JSON.parse(localStorage.getItem("classObject"));
    let newAnimal = new Animal(
        readAnimal.name,
        readAnimal.age,
        readAnimal.eyeColor
    );
    console.log(readAnimal);
    console.log(newAnimal);
});

class Human extends Animal {
    constructor(name, age, eyeColor) {
        super(name, age, eyeColor);
    }

    speak() {
        return "Hello!";
    }
}

class Dog extends Animal {
    constructor(name, age, eyeColor, hasFur, hasTail) {
        super(name, age, eyeColor);
        this.hasFur = hasFur;
        this.hasTail = hasTail;
    }

    speak() {
        return "Woof!";
    }
}

class Cat extends Animal {
    constructor(name, age, eyeColor, hasFur, hasTail) {
        super(name, age, eyeColor);
        this.hasFur = hasFur;
        this.hasTail = hasTail;
    }

    speak() {
        return "Meow!";
    }

    destroySofa() {
        return "Meows softly in pillows!";
    }
}

const jordanLad = new Human("Jordan", 31, "Blue");
const dibbles = new Cat("Dibbles", 9, "Green", true, true);
const bingo = new Dog("Bingo", 3, "Yellow", true, false);

console.log(jordanLad);
console.log(dibbles);
console.log(bingo);
