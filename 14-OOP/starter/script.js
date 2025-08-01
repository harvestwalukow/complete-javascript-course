'use strict';
/*
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  //   this.calcAge = function () {
  //     console.log(2025 - this.birthYear);
  //   };
};

const harvest = new Person('Harvest', '2005');
console.log(harvest);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const dakota = new Person('Dakota', '2007');
console.log(dakota);

console.log(harvest instanceof Person);

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2025 - this.birthYear);
};

harvest.calcAge();
dakota.calcAge();

console.log(harvest.__proto__);
console.log(Person.prototype.isPrototypeOf(harvest));

Person.prototype.species = 'Homo Sapiens';
console.log(harvest.species, dakota.species);

console.log(harvest.hasOwnProperty('firstName'));
console.log(harvest.hasOwnProperty('species'));

console.log(harvest.__proto__);
console.log(harvest.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [1, 2, 3, 4, 5, 6, 7, 7];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);


//Class expression
// const PersonCl = class {}

// Class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2025 - this.birthYear);
  }
}

const harvest = new PersonCl('Harvest', 2005);
console.log(harvest);
harvest.calcAge();

console.log(harvest.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};
harvest.greet();

// 1. Classes are not hoisted
// 2. Class are first-class citizen
// 3. Classes are executed in strict mode

const PersonProto = {
  calcAge() {
    console.log(2025 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const harvest = Object.create(PersonProto);
console.log(harvest);
harvest.name = 'Harvest';
harvest.birthYear = 2005;
harvest.calcAge();

console.log(harvest.__proto__) === PersonProto;

const dakota = Object.create(PersonProto);
dakota.init('Dakota', 2007);
dakota.calcAge();

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2025 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const harvest = new Student('Harvest', 2005, 'Data Science');
console.log(harvest);
harvest.introduce();
harvest.calcAge();

console.log(harvest.__proto__);
console.log(harvest.__proto__.__proto__);

console.log(harvest instanceof Student);
console.log(harvest instanceof Person);
console.log(harvest instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);


class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2025 - this.birthYear);
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
  }
}

const harvest = new StudentCl('Harvest', 2005, 'Data Science');

harvest.introduce();
harvest.calcAge();
*/
const PersonProto = {
  calcAge() {
    console.log(2025 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const harvest = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`Hi`);
};
const jay = Object.create(StudentProto);
jay.init('Jay', 2005, 'Data Science');
jay.introduce();
jay.calcAge();
