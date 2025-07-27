/*
let js = 'amazing';
console.log(1 + 1);

console.log("Jonas");
console.log(23);

// Variable name conventions
let firstName = "Matila";
console.log(firstName);

let person = "harvest";
let $function = 27;
let PI = 3.14;


let javaScriptIsFun = true;
console.log(javaScriptIsFun);

// console.log(typeof true);
console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'harvest');

javaScriptIsFun = 'YES!';
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 2005;
// birthYear = 2025;

// const job;

var job = "programmer";
job = "teacher";


const now = 2025
const ageHarvest = now - 2005;
const ageDakota = now - 2006;
console.log(ageHarvest * 2, ageDakota / 10, 2 ** 3);

const firstName = "Harvest";
const lastName = "Walukow";
console.log(firstName + " " + lastName)

// Assignment operators
let x = 10 + 5;
x += 10
x *= 4
x++
x--
console.log(x)

// Comparison operators
console.log(ageHarvest > ageDakota)

const isFullAge = ageDakota >= 18;


const now = 2025;
const ageHarvest = now - 2005;
const ageDakota = now - 2006;

console.log(now - 2005 > now - 2024);

let x, y;
x = y = 1 + 1;
console.log(x, y);

const averageAge = (ageHarvest + ageDakota) / 2
console.log(averageAge)


const firstName = "Harvest";
const job = "student";
const birthYear = "2005";
const year = 2025;

const harvest = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!"
console.log(harvest);

const harvestNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(harvestNew);

console.log(`Just regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);


const age = 10;

if (age >= 18) {
    console.log("Harvest can start driving license 👏");
} else {
    const yearsLeft = 18 - age
    console.log(`Harvest is too young. Wait another ${yearsLeft} years.`);
}

const birthYear = 2005;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century)


// type conversion
const inputYear = '2005';
console.log(Number(inputYear));
console.log(inputYear + 18);

console.log(Number("Harvest"));

console.log(String(20), 20);

// type coercion
console.log("I am " + 23 + " years old");
console.log("20" - "11" + 1);

let n = "1" + 1;
n = n - 1;
console.log(n);


// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("harvest"));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log("You should get a job!");
}

let height;
if (height) {
    console.log("YAY! Height is defined");
} else {
    console.log("Height is UNDEFINED")
}


const age = 18;
if (age === 18) console.log('You just became an adult')

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log('Cool 23 is an amazing number!')
}

if (favourite !== 23) {
    console.log("Why not 23?")
}


const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log('Sarah is able to drive!')
// } else {
//     console.log('Someone else should drive...')
// }

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!')
} else {
    console.log('Someone else should drive...')
}


const day = 'wednesday';

switch (day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory video');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day!');
}
*/

const age = 20;
age >= 18 ? console.log("I like to drink wine") : console.log("I like to drink water");
const drink = age >= 18 ? 'wine' : 'water';
console.log(drink)

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`)