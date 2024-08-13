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
