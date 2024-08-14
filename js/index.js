//Prototypal Inheritance and the Prototype Chain

//ES6 introduced classes which is the modern way to construct objects

//That said, prototypal inheritance and the prototype chain are:
//1) "under hood", (ES6 Classes are considered 'syntactic sugar')
//2) often in interview questions,
//3) and are useful to understand.

// Object literals
const person = {
  alive: true,
};

const musician = {
  plays: true,
};

// musician.__proto__ = person;

//JS now has getPrototypeOf and setPrototypeOf methods instead of using __Proto__
Object.setPrototypeOf(musician, person);
console.log(Object.getPrototypeOf(musician));
console.log(musician.__proto__);
console.log(Object.getPrototypeOf(musician) === musician.__proto__);

//Extending the prototype chain => general to specific to more specific
const guitarist = {
  strings: 6,
  __proto__: musician,
};
console.log(guitarist.alive);
console.log(guitarist.plays);
console.log(guitarist.strings);
console.log(guitarist);

//No circular references allowed (person.__proto__ can't be guitarist)
//The __proto__ value must be an object or null.
//An object can only directly inherit from one object

//object with getter and setter methods
const car = {
  doors: 2,
  seats: 'vinyl',
  get seatMaterial() {
    return this.seats;
  },
  set seatMaterial(material) {
    this.seats = material;
  },
};

const luxuryCar = {};
Object.setPrototypeOf(luxuryCar, car);
luxuryCar.seatMaterial = 'leather'; //Note keyword "this"
console.log(luxuryCar);
console.log(luxuryCar.doors);
console.log(car);

//Getting the keys of an object
console.log(Object.keys(luxuryCar));
//loop through each object key
Object.keys(luxuryCar).forEach((key) => {
  console.log(key);
});
for (let key of Object.entries(luxuryCar)) {
  console.log(key);
}
//But for..in loop includes inherited props
for (let key in luxuryCar) {
  console.log(key);
}
for (let [key, value] in Object.entries(luxuryCar)) {
  console.log(key, value);
}
