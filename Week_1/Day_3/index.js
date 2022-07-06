/* 
Multi line
comment
*/

//Single line comment

// Declaration

let welcome;

//Initialization

welcome = 'Hello there';

// Declare and initialize at the same time

let greeting = 'Hello Ironhacker';

console.log(welcome, typeof welcome);

welcome = true;

console.log(welcome, typeof welcome);

const city = 'Lisbon';

//city = 'Madrid';

console.log(city);

// Primitive Data types

// String
// Number
// Boolean
// Null
// Undefined
// Symbol (not used)

// Numbers

let age = 28;

let price = 10.99;

let name = 'André';

let operation = name / age;

//console.log(operation, typeof operation);

age += 1;
//console.log(age);

// 3.2
// 14.99

//Math.floor() rounds down
/* console.log(Math.floor(3.2));
console.log(Math.floor(14.99)); */

// Math.ceil() rounds up
/* console.log(Math.ceil(3.2));
console.log(Math.ceil(14.99)); */

// Math.round() rounds to the nearest integer
/* console.log(Math.round(3.2));
console.log(Math.round(14.99)); */

// Rounding to specific decimal spaces - Math.round method

let anyNuymber = 5.6789233;

let roundToOne = Math.round(anyNuymber * 10) / 10;
let roundToTwo = Math.round(anyNuymber * 100) / 100;

/* console.log(roundToOne);
console.log(roundToTwo); */

let newRounded = Number(anyNuymber.toFixed(3));

//console.log(newRounded, typeof newRounded);

//Math.random gives us a random number between 0 (inclusive) and 1 (excluded)

/* console.log(Math.random() * 100);
console.log(Math.random());
console.log(Math.random()); */

// Math.max() and Math.min()

/* console.log(Math.max(2, -8, 19, 7, 10));
console.log(Math.min(2, -8, 19, 7, 10)); */

// Math.pow
//console.log(Math.pow(2, 3));

// Strings

let firstName = 'Xico';
let lastName = 'Duarte';

//Old way - String concatenation
let oldMessage = 'Hello ' + firstName + ' ' + lastName + '!';
//console.log(oldMessage);

//New way - string interpolation
let newAge = 20;

let newMessage = `Hello ${firstName} ${lastName}, are you ${newAge} years old?`;
console.log(newMessage);

//Escaping/using quotes as characters
let book = 'I love "Lord of the Rings"';
let word = "I'm";

//length - property of string (doesn't need () in front)

//console.log(book.length);

let longString = 'This is a long message';

/* console.log(longString.charAt(2));
console.log(longString.charAt(7));
console.log(longString[2]); */

let message = "It's not this and it's not thats";
/* console.log(message.indexOf('s'));
console.log(message.indexOf('this'));
console.log(message.indexOf('not', 10));
console.log(message.lastIndexOf('not'));
console.log(message.lastIndexOf('s')); */

//let userInfo = "[FTLIS072022]"
let review = '⭐️ '.repeat(5);

//repeat
//console.log(review);
//console.log('alright '.repeat(7));

let myMessage = 'Hey there, how are you?';
let cutString = myMessage.substring(11, 14);

console.log(cutString);
console.log(myMessage);

let slicedString = myMessage.slice(-4, -1);
console.log(slicedString);

// Locale Compare

/* console.log('age'.localeCompare('bonus'));
console.log('age'.localeCompare('age'));
console.log('bonus'.localeCompare('age'));
console.log('2'.localeCompare('10')); */

//toLowerCase
let capitalString = 'HELLO THERE';
//console.log(capitalString.toLowerCase());

//console.log('age'.localeCompare(capitalString.toLowerCase()));

const str = 'To be or not to be, that is the question.';

//startsWith
/* console.log(str.startsWith('To'));
console.log(str.startsWith('to be', 13));

//endsWith
console.log(str.endsWith('.'));

//includes
console.log(str.includes('To'));
console.log(str.includes('To', 1)); */

// Boolean

let a = true;
let b = false;

// Operators

// OR || - If at least one of the expressions is true, it returns true

/* console.log(true || true);
console.log(true || false);
console.log(false || false);
console.log(false || 10 > 1);
console.log(true || false || false || false || false); //short-circuit

// AND && - Will returnb true if ALL expressions evaluate to true

console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log(true && 10 > 1);
console.log(false && true && true && true); //short-circuit

// Not
console.log(!true);
console.log(!false);
console.log(!(10 > 1));

// Undefined

let user;

console.log(user);

// Null

let username = null;
console.log(username); */

// Thruthy and Falsy values

if (true && 234 && '0' && 'false' && {} && []) {
  console.log('These are all thruthy');
}

if (!(false || 0 || '' || undefined || null || NaN)) {
  console.log('These are all falsy');
}

// Immutability - can't be changed

let campus = 'Lisbon';

//campus = 'Barcelona';

campus[0] = 'F';

campus = 'Fisbon';

console.log(campus);

let x = 1;

let y = x;

x = 2;

console.log(y);

// Conditionals Loop

// if

const someAge = 27;

if (someAge <= 16) {
  console.log('You get a junior discount');
} else if (someAge >= 65) {
  console.log('You have a Senior Discount');
} else {
  console.log('No discount for you');
}

const first = 10;
const second = 20;

//console.log(10 === '10');

if (first === second) {
  console.log('Equal number');
} else {
  if (first > second) {
    console.log('First is greater');
  } else {
    console.log('Second is greater');
  }
}

const pokemon = 'Totodile';
let type = '';

switch (pokemon) {
  case 'Pikachu':
    type = 'Electric';
    break;
  case 'Charmander':
    type = 'Fire';
    break;
  case 'Squirtle':
  case 'Totodile':
  case 'Mudkip':
    type = 'Water';
    break;

  default:
    type = 'Other';
}
console.log(`${pokemon} is of type ${type}`);

let myNumber = 10;

switch (true) {
  case myNumber > 5:
    console.log('Greater than five');
    break;
  case myNumber < 20:
    console.log('Less than twenty');
}

// While loop (while something is true)

let count = 100;

/* while (count >= 0) {
  console.log(count);
  count--;
} */

// do while

/* let count2 = 0;

do {
  console.log(count2);
  count2++;
} while (count2 < 0);
 */

// for loop

/* for (let i = 0; i <= 100; i++) {
  console.log(i);
}
 */
// for of

let lisbonCampus = 'Heden Santa Apolonia';

/* for (value of lisbonCampus) {
  console.log(value);
} */

// Continue & break

let count2 = 0;

while (count2 <= 5) {
  count2++;
  console.log(count2);
  if (count2 === 3) {
    break;
  }
}

let count3 = 0;

while (count3 <= 5) {
  count3++;
  if (count3 === 3) {
    continue;
  }
  console.log(count3);
}

// for loop that console.logs from 0 to 30
// but when you get to 10, 20, and thirty, console.log 'ten', 'twenty, 'thirty'
0;
1;
2;
3;
4;
5;
6;
7;
8;
9;
('ten');

for (let i = 0; i <= 30; i++) {
  console.log(i);

  if (i === 10) {
    console.log('ten');
    continue;
  } else if (i === 20) {
    console.log('twenty');
  } else if (i === 30) {
    console.log('thirty');
  } else {
    console.log(i);
  }
}

// Modulus operator / Remainder

console.log(11 % 2);

//loop from 0 to 20

// "0 is even"
// "1 is odd"
// "2 is even"
// "3 is odd"

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}
