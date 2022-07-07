// Declaration

/* function functionName(parameters){
  // operation
  return something;
}

//Invocation
functionName(arguments)
 */

function sayHello(name, age) {
  return `Hello there ${name}, are you ${age} years old?`;
}

function returning() {
  return 1 + 1;
}

//Pure function

/* function sum(a, b) {
  return a + b;
}

let mySum = sum(10, 12);

console.log(mySum);

let myString = `This is my number ${mySum}`; */

let myValue = returning();

console.log(sayHello('Xico', 28));
//sayHello('André', 28);
//sayHello('Karina', 24);

//Returning conditionally
function getName(name) {
  if (name.length === 0) {
    return `Please write a name`;
  } else {
    return `Name is ${name}`;
  }
}

/* console.log(getName(''));
console.log(getName('Gui')); */

//Returning multiple valçues with an object
function getUserInfo(name, age, email) {
  let userInfo = {
    firstName: name,
    userAge: age,
    userEmail: email,
  };
  return userInfo;
}

console.log(getUserInfo('Xico', 20, 'xico@xico.com'));

function catchEm(poke1, poke2, poke3) {
  const dex = [poke1, poke2, poke3];
  return dex;
}

const miguelDex = catchEm('Pikachu', 'Charmander', 'Snorlax');
const xicoDex = catchEm('Bulbasaur', 'Squirtle', 'Eeevee');

console.log(miguelDex);
console.log(xicoDex);

//Create a function called average that accepts 1 parameter - an array
// return the average off all numbers

let myAverageArray = [350, 560, 680, 10];

function average(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum / array.length;
}

console.log(average(myAverageArray)); // sum = 1600
//console.log(sum);
//console.log(average(myAverageArray));

// Arrays

let myArray = ['Hello', true, 89, {}, []];
const emptyArray = [];

let namesArray = ['André', 'Karina', 'Xico'];

console.log(namesArray[2]);

// Array methods
//push (to the end of the array)

namesArray.push('Gui');
console.log(namesArray);

//unshift
namesArray.unshift('Diogo');
console.log(namesArray);

//pop
namesArray.pop();
console.log(namesArray);

//shift
namesArray.shift();
console.log(namesArray);

//splice
//first argument - starting index
//second argument - number of items to cut
//namesArray.splice(1, 1);
//console.log(namesArray);

let myArray2 = [];

//The array must have numbers from 1 to 100, but you can't use push
for (let i = 100; i > 0; i--) {
  myArray2.unshift(i);
}

//console.log(myArray2);

// forEach

/* console.log(namesArray);

namesArray.forEach(function (name, index) {
  console.log(`${name} will take seat ${index}`);
}); */

// namesArray.forEach((name) => name);

let longString = 'How  much wood would a woodchuck chuck if a woodchuck could chuck wood?';

let words = longString.split('');
//console.log(words);

let email = 'xico@ironhack.com';
let firstEmail = email.split('@');
//console.log(firstEmail[0]);

// Objects

let emptyObj = {};

let myObj = {
  namesOfClass: ['André', 'Xico'],
  age: 28,
  isTeaching: true,
};

const myStore = {
  keyboard: 30.99,
  mouse: 15,
  screen: 'Not available!',
};

//dot notation
console.log(myStore.mouse);

//bracket notation
console.log(myStore['mouse']);

//inserting with dot notation
myStore.laptop = 1000;

//insert with bracket notation

myStore['chair'] = 100;

console.log(myStore);

//in operator
console.log('keyboard' in myStore);
console.log('boat' in myStore);

//update
myStore.laptop = 2000;

//delete

delete myStore.chair;

console.log(myStore);

//Iterate over an object

//Object.keys - returns an array with all the keys
console.log(Object.keys(myStore));

//Object.values - returns an array with all the values
console.log(Object.values(myStore));

//for in

for (let product in myStore) {
  console.log(myStore[product]);
}

// user object - name, city
let user = {
  name: 'André',
  city: 'Lisbon',
};

// 3x song1, song2, song3 - title, artist, genre
let song1 = {
  title: 'Ride on Time',
  artist: 'Tatsuro Yamashita',
  genre: 'City Pop',
};
let song2 = { title: 'Song 2', artist: 'Blur', genre: 'Rock' };
let song3 = { title: 'Pokerface', artist: 'Lady Gaga', genre: 'Pop' };

user.playlist = [song1, song2, song3];

console.log(user);

let song4 = { title: 'Yesterday', artist: 'The Beatles', genre: 'rock' };

user.playlist.push(song4);

console.log(user);

// Matrix / Two-dimensional array

const twoDimensional = [
  ['Pikachu', 'Raichu'],
  ['Squirtle', 'Totodile'],
];

console.log(twoDimensional[0][1]);

const company = [
  [
    { name: 'Hannah Simon', email: 'naci@cafdud.lb' },
    { name: 'Harriet Bryan', email: 'isudi@kafwobti.bg' },
    { name: 'Amanda Banks', email: 'ama@sot.mp' },
  ],
  [
    { name: 'Floyd Carson', email: 'ijhuzere@co.pn' },
    { name: 'Garrett Morton', email: 'tul@uficugape.az' },
    { name: 'Fanny Marsh', email: 'ci@tudni.gw' },
  ],
  [
    { name: 'Miguel Pearson', email: 'ci@pacruuj.se' },
    { name: 'Florence Edwards', email: 'tiisefo@avbuvul.uz' },
    { name: 'Adelaide Adams', email: 'lepozoco@coduz.gi' },
  ],
];
console.log(company[2][1].name);
