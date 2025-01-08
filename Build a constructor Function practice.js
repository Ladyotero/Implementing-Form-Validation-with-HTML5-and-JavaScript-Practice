// Create a contstructor function named `Animal` that represents the animal.

// 1. `species` (e.g., "frog")
// 2. `name` (e.g.,  "Coqui")
// 3. `color` (e.g., "Green")
// 4. `sound` (e.g., "Coqui")

// Create tow anumals and call their makeSound functions

//---

function Animal(valueSpecies, valueName, valueColor, valueSound) {
  this.species = valueSpecies;
  this.name = valueName;
  this.color = valueColor;
  this.sound = valueSound;
  this.makeSound = function() {
    console.log(`${this.name} says ${this.sound} ${this.color},`);
  };
}

const animal1 = new Animal("Frog", "Coqui","Green", "cokei!");
const animal2 = new Animal("Panda", "Basi", "Black and White","soft noise")

animal1.makeSound();
animal2.makeSound();