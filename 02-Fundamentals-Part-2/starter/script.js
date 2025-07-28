'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

// const interface = 'Audio';
const private = 123;


function logger() {
    console.log("My name is Harvest");
}

logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apple and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice)

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice)


// function declaration
function calcAge1(birthYear) {
    return 2025 - birthYear;
}
const age1 = calcAge1(2005);

// function expression
const calcAge2 = function (birthYear) {
    return 2025 - birthYear;
}
const age2 = calcAge2(2005)

console.log(age1, age2);


// arrow function
const calcAge3 = birthYear => 2025 - birthYear;
console.log(calcAge3(2005))

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2025 - birthYear;
    const retirement = 40 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(2005, 'Harvest'));


function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3))


const friends = ['Harvest', 'Ecclesiano', 'Christ'];
console.log(friends);

// const years = new Array(2005, 2006, 2007);

console.log(friends[0]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Joy'
console.log(friends);

const firstName = 'Harvest'
const harvest = [firstName, 'Walukow', 2025 - 2005, 'student', friends]
console.log(harvest);

// exercise
const calcAge = function (birthYear) {
    return 2025 - birthYear;
}
const years = [2005, 2006, 2007];
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2])];
console.log(ages)


const friends = ['Harvest', 'Ecclesiano', 'Christ'];
const newLength = friends.push('Joy');
console.log(friends);
console.log(newLength);

friends.unshift('Ken');
console.log(friends);

friends.pop()
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Ecclesiano'));

friends.push(23);
console.log(friends.includes('Harvest'));
console.log(friends.includes('23'));
console.log(friends.includes(23));


const harvest = {
    firstName: 'Harvest',
    lastName: 'Walukow',
    age: 2025 - 2005,
    job: 'student',
    friends: ['Joy', 'Ecclesiano']
};
console.log(harvest);

console.log(harvest.lastName);
console.log(harvest['lastName']);

const nameKey = 'Name';
console.log(harvest['first' + nameKey]);

const interestedIn = prompt("What do you want to know about Harvest? Choose between firstName, lastName, age, job, and friends.");
console.log(harvest[interestedIn]);

// if (harvest[interestedIn]) {
//     console.log(harvest[interestedIn]);
// } else {
//     console.log("Wrong request! Choose between firstName, lastName, age, job, and friends.")
// }

harvest.location = 'Indonesia';
harvest['instagram'] = '@harvestwalukow';

// challange
// Harvest has 3 friends, and his best friend is called Joy

console.log(`${harvest.firstName} has ${harvest.friends.length} and his best friend is called ${harvest.friends[0]}`);


const harvest = {
    firstName: 'Harvest',
    lastName: 'Walukow',
    birthYear: 2005,
    job: 'student',
    friends: ['Joy', 'Ecclesiano'],
    hasDriverLicense: true,

    // calcAge: function (birthYear) {
    //     return 2025 - birthYear
    // }

    // calcAge: function () {
    //     console.log(this)
    //     return 2025 - this.birthYear
    // }

    calcAge: function () {
        this.age = 2025 - this.birthYear
        return this.age;
    },

    getSummary: function () {
        if (this.hasDriverLicense === true) {
            this.summary = `${this.firstName} is a ${this.age}-years old ${this.job}, and he has a driver's license`
        } else {
            this.summary = `${this.firstName} is a ${this.age}-years old ${this.job}, and he doesn't have a driver's license`
        }
    }
};

harvest.calcAge()
harvest.getSummary()
console.log(harvest.summary);


const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi
    }
}

mark.calcBMI()
john.calcBMI()

if (mark.bmi > john.bmi) {
    console.log(`Mark Miller's BMI (${mark.bmi}) is higher than John Smith's (${john.bmi})!`)
} else if (john.bmi > mark.bmi) {
    console.log(`John Smith's BMI (${mark.bmi}) is higher than Mark Miller's (${john.bmi})!`)
} else {
    console.log(`They have the same BMI.`)
}


// console.log('Lifting weights repetition 1');

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}


const harvest = [
    'Harvest',
    'Walukow',
    2025 - 2005,
    'student',
    ['Joy', 'Ecclesiano']
];

const types = []

for (let i = 0; i < harvest.length; i++) {
    console.log(harvest[i], typeof harvest[i]);

    // types[i] = typeof harvest[i];
    types.push(typeof harvest[i]);
};

console.log(types);

const years = [2005, 2006, 2007];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages[i] = 2025 - years[i]
}

console.log(ages)

// continues and break
// for (let i = 0; i < harvest.length; i++) {
//     if (typeof harvest[i] !== 'string') continue;
//     console.log(harvest[i], typeof harvest[i]);
// }

for (let i = 0; i < harvest.length; i++) {
    if (typeof harvest[i] !== 'number') break;
    console.log(harvest[i], typeof harvest[i]);
}


const harvest = [
    'Harvest',
    'Walukow',
    2025 - 2005,
    'student',
    ['Joy', 'Ecclesiano']
];

for (let i = harvest.length - 1; i >= 0; i--) {
    console.log(i, harvest[i])
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`======= Starting exercise ======= ${exercise}`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}
*/

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weight repetition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//     console.log(`WHILE: Lifting weight repetition ${rep}`);
//     rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}
