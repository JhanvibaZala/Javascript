class Animal {}

const dog = new Animal();

console.log(dog instanceof Animal);     // true
console.log(dog instanceof Object);     // true
console.log(dog instanceof Array);      // false
console.log(dog instanceof String);     // false


// edge cases
console.log([] instanceof Array); // true
console.log([] instanceof Object); // true