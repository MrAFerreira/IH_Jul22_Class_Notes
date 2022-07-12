// DON'T USE VAR - USE LET AND CONST
//DON'T USE THE SAME NAME TWICE. BE CREATIVE. I MEAN DON'T, USE APPROPRIATE NAMES

// Scope

//Global scope - Available everywhere ioncluding child scopes
let myName = 'André';

//Function scope - available inside of that function and any child scopes

//Block scope - Available only inside the statement or expression where it was declared

//var

var message = 'Hello from the global scope';

function fromLocalScope() {
  var greeting = 'Hello from local scope';
  return greeting;
}

console.log(message);
//console.log(greeting);

var message = 'This is a new message';

console.log(message);

/* for (var i = 0; i < 30; i++) {
  console.log(`Inside the loop: ${i}`);
}

console.log(`Outside the loop: ${i}`); */

/* for (let i = 0; i < 30; i++) {
  console.log(`Inside the loop: ${i}`);
} */

//console.log(`Outside the loop: ${i}`);

//Cannot redeclare a variable with let, but we can reasign a value
let myMessage = 'Hello there';

myMessage = 'Hey hey';

//global scope
let bestTA = 'Xico';

function scope() {
  //let bestTA = 'Catarina';
  console.log(bestTA);

  if (true) {
    //block scope
    let bestTA = 'Diogo';
    console.log(bestTA);
  }
}
/* scope();
console.log(bestTA); */

const obj = {};
obj.name = 'Ironhacker';

//obj = { name: 'Ironhacker' };

//console.log(obj);

//Hoisting - on the globalscope

//var gets hoisted and declared (with undefined)
//console.log(newVar); // <- undefined

var newVar = 'Hey there';

//let and const get hoisted (technically) but with no value
//console.log(newLet); // <- error: cannot access beforte initialization

let newLet = 'Not gonna work';

// setTimeout - asynchronous

//let timeoutId = setTimeout(callback, delay)

function someCallbackFunction() {
  console.log('Hello everyone');
}

/* const timeoutId = setTimeout(someCallbackFunction, 5000);
console.log('Whats up Xico?');


clearTimeout(timeoutId);

const newTimeoutID = setTimeout(() => {
  console.log('Arrow syntax');
}, 2000); */

//setInterval - repeats the function every x amount of miliseconds

//const intervalId = setInterval(callback, delay)

const intervalId2 = setInterval(() => {
  console.log('1 second');
}, 1000);

clearInterval(intervalId2);

// create a function called countTen()
//inside the function run a setInterval that will print the time each second, like so:
// 1
//2
//3 ...
//Once it gets to 10, stop the clock

function countTen() {
  let i = 0;

  const intervalId = setInterval(() => {
    if (i < 10) {
      i++;
      console.log(i);
    } else {
      clearInterval(intervalId);
    }
  }, 1000);
}

//countTen();

let user = {
  name: 'Diogo',
  age: 31,
  getOlder: function () {
    let intervalId = setInterval(() => {
      console.log(this);
      this.age++;
      console.log(this.age);
      if (this.age >= 40) clearInterval(intervalId);
    }, 1000);
  },
};
//user.getOlder();

//check if callback exists before running it

/* function acceptCallback(callback) {
  if (callback) callback();
}

acceptCallback(); */

// Value vs Reference

// Variables pointing to the same primitive value will return true when compared
let price1 = 10.99;
let price2 = price1;

console.log(price1 === price2);

// Value by reference

const book1 = { author: 'J.R.R. Tolkien' };
const book2 = book1;

book1.author = 'Oscar Wilde';

/* console.log(book1);
console.log(book2);
 */
book2.author = 'Herman Melville';
book2.year = 1852;

/* console.log(book1); */

let students = ['Andrea', 'Raquel', 'Matulan', 'Brenda'];
let students2 = ['Andrea', 'Raquel', 'Matulan', 'Brenda'];
let ironhackers = students;

console.log({} === {});

//students.push('Jason');

console.log(students);
console.log(ironhackers);

//Copying an object

let favBook = { title: 'Lord of the Rings', author: 'Tolkien' };

let stringified = JSON.stringify(favBook);
//console.log(stringified);
let parsedBook = JSON.parse(stringified);
//console.log(parsedBook);

// let favBookCopy = JSON.parse(JSON.stringify(favBook))

favBook.author = 'Charles Dickens';
console.log(favBook);

console.log(parsedBook);

// Copying an array

let students3 = [
  ['Andrea', 'Raquel', 'Matulan', 'Brenda'],
  ['Phil', 'John', 'Simão', 'Jason'],
];

// Spread operator - creates a Shallow copy
let studentsCopy = [...students3];

let deepCopy = JSON.parse(JSON.stringify(students3));

students3[0].splice(2, 1, 'Xico');
console.log(studentsCopy);

//Deep copying

console.log(deepCopy);
