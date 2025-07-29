'use strict';

/*
function calcAge(birthYear) {
  const age = 2025 - birthYear;

  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 2000 && birthYear <= 2010) {
      const str = `Oh, and you're Gen Z, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
  }
  printAge();
  add(2, 3);

  return age;
}

const firstName = 'Harvest';
calcAge(2005);


// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Harvest';
let job = 'student';
const year = 2005;

console.log(addDec(2, 3));

function addDec(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// Example
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);



console.log(this);

const calcAge = function (birthYear) {
  console.log(2025 - birthYear);
  console.log(this);
};
calcAge(2005);

const calcAgeArrow = birthYear => {
  console.log(2025 - birthYear);
  console.log(this);
};
calcAgeArrow(2012);

const harvest = {
  year: 2005,
  calcAge: function () {
    console.log(this);
    console.log(2025 - this.year);
  },
};
harvest.calcAge();

const dakota = {
  year: 2007,
};

dakota.calcAge = harvest.calcAge;
dakota.calcAge();

const f = harvest.calcAge;
f();


const harvest = {
  firstName: 'Harvest',
  year: 2005,
  calcAge: function () {
    console.log(this);
    console.log(2025 - this.year);
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};

harvest.greet();

*/

const dakota1 = {
  firstName: 'Dakota',
  lastName: 'Ang',
  age: 20,
};

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

const marriedDakota = marryPerson(dakota1, 'Walukow');

// const marriedDakota = dakota;
// marriedDakota.lastName = 'Walukow';

console.log('Before:', dakota1);
console.log('After:', marriedDakota);

const dakota = {
  firstName: 'Dakota',
  lastName: 'Ang',
  age: 20,
  family: ['Alive', 'Bob'],
};

// Shallow copy
const dakotaCopy = { ...dakota };
dakotaCopy.lastName = 'Walukow';

// console.log(dakota, dakotaCopy);
// dakotaCopy.family.push('Mary');
// dakotaCopy.family.push('John');

// console.log('Before:', dakota);
// console.log('After:', dakotaCopy);

// Deep copy
const dakotaClone = structuredClone(dakota);
dakotaClone.family.push('Mary');
dakotaClone.family.push('John');

console.log('Original:', dakota);
console.log('Clone:', dakotaClone);
