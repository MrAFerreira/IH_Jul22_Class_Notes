// Function Declaration
// Is a named function that CAN be stored in a variable

function sum(a, b) {
  return a + b;
}

const mySum = sum;

//console.log(mySum);

// Function expression
// Is an anonymous function that IS stored varieable

const newSum = function (a, b) {
  return a + b;
};

//console.log(newSum(10, 45));

//Function declaration IS hoisted to the top (can call before declaring)
/* checkFuncDeclaration();

function checkFuncDeclaration() {
  console.log('Function Declaration');
} */

// Function expression DOESN'T get hoisted (cannot call before initialization)
/* checkFuncExpression();

const checkFuncExpression = function () {
  console.log('Function Expression');
};
 */

// Callbacks

function getUserInfo(callback) {
  setTimeout(function () {
    console.log('Got user info');
    callback();
  }, 1000);
}

function printUserOneInfo() {
  console.log('Name: André');
}
function printUserTwoInfo() {
  console.log('Name: Xico');
}

//Pass the callback function as an argument WITHOUT parentheses (that would trigger the function)
//getUserInfo(printUserOneInfo);
//getUserInfo(printUserTwoInfo);

//Callback example:
/* let myArr = [1, 2, 3, 4];

myArr.forEach(function (el) {
  console.log(el);
}); */

// Anonymous function - function without a name / usually when we want to perform the action only once

function getLength(str, callback) {
  callback(str);
}

/* getLength('Example String', function (str) {
  console.log(str.length);
});
 */
//setTimeout

/* setTimeout(function () {
  console.log("I'm going to take two seconds");
}, 2000);

setTimeout(function () {
  console.log("I'm going to take ten seconds");
}, 10000); */

//setTimeout(function(), 1000)

// Arrow functions
// Can only be used with function expression

// Old syntax

/* const greeting = function (name) {
  console.log(`Hello ${name}`);
};

greeting('Xico'); */

//Arrow syntax (ES6)

const greeting = (name) => {
  return name;
};

//direct return
const arrowSum = (a, b) => a + b;

const randomGreet = () => console.log('Hey hey');

//randomGreet();

let storedName = greeting('Xico');

//console.log(storedName);

//Arrow syntax and scope

const user = {
  name: 'Diogo',
  age: 31,
  getOlder: function () {
    //By using arrow syntax, the this stops referring to setInterval and becomes attached to the object again
    setInterval(() => {
      this.age += 1;
      console.log(this.age);
    }, 1000);
  },
};

//user.getOlder();

// Arguments object

function printArgs() {
  //arguments is a keyword
  console.log(arguments);
}

//printArgs(1, 'Hey', false, 121, 345);

// arguments is an array-like object
//it has index 0 and has length
// we cannot use forEach / filter /reduce

function sumArgs() {
  // const args = Array.from(arguments)

  let sum = 0;

  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(sum);
  return sum;
}

//sumArgs(1, 4, 6, 78, 980);
//sumArgs(1, 4);
//sumArgs(1, 4, 76, 54, 32, 13, 657, 7854, 432);

// Array methods
// Map, Reduce, Filter - Don't mutate the original array
// They return a new array

let myArr = [1, 2, 3];

// Map

//using forEach

let newArray = [];

myArr.forEach((num) => {
  newArray.push(num * 2);
});

console.log(newArray);

//using map

const mappedArray = myArr.map((num) => num * 2);

console.log(mappedArray);

const stringArray = ['can', 'you', 'hear', 'me', 'now?'];

const scream = stringArray.map((str) => str.toUpperCase());

console.log(stringArray);
console.log(scream);

//using map, return a new array with the names of the cities capitalized
const cities = [
  'miami',
  'barcelona',
  'madrid',
  'amsterdam',
  'berlin',
  'sao paulo',
  'lisbon',
  'mexico city',
  'paris',
];

const capitalCities = cities.map((city) => city[0].toUpperCase() + city.slice(1));

/* const capitalCities = cities.map((city) => {
return city[0].toUpperCase() + city.slice(1)
});
 */

//console.log(capitalCities);

// Reduce - Joins everything in the array

//let myArr = [1, 2, 3];

//Syntax
/* arr.reduce(function (accumulator, currentValue){
  return accumulator + currentValue
})

arr.reduce((acc, val) => acc + val) */

let numArray = [2, 4, 6, 8];

/* const totalSum = numArray.reduce((acc, val) => {
  console.log(`Accumulator is currently: ${acc}, value is: ${val}`);
  return acc + val;
}); */

/* const totalSumTen = numArray.reduce((acc, val) => {
  console.log(`Accumulator is currently: ${acc}, value is: ${val}`);
  return acc + val;
}, 10); */

//console.log(totalSum);

const separateChars = ['U', 'n', 'i', 't', 'e', 'd'];

const united = separateChars.reduce((acc, val) => {
  return acc + val;
}, 'Manchester ');
console.log(united);

// Using reduce - Return the total value of the items in the store
const products = [
  { name: 'Keyboard', price: 30.0 },
  { name: 'Mouse', price: 64.99 },
  { name: 'Controller', price: 59.8 },
  { name: 'Speakers', price: 43.7 },
];

const totalPrice = products.reduce((acc, value) => {
  //console.log(acc);
  return acc + value.price;
}, 0);

//console.log(totalPrice);

const average = (arr) => {
  let sum = arr.reduce((acc, value) => acc + value);
  return sum / arr.length;
};

//console.log(average(numArray));

// Filter

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/* const evenNumbersOld = numbers.filter((num) => {
  if(num % 2 === 0){
    return num
  }
}) */

const evenNumbers = numbers.filter((num) => num % 2 === 0);

//console.log(evenNumbers);

const greaterThanFive = numbers.filter((num) => num > 5);
//console.log(greaterThanFive);

const products2 = [
  { name: 'Keyboard', price: 30.0, available: true },
  { name: 'Mouse', price: 64.99, available: false },
  { name: 'Controller', price: 59.8, available: true },
  { name: 'Speakers', price: 43.7, available: false },
];

const availableProducts = products2.filter((product) => product.available);

//console.log(availableProducts);

// Sort

const namesArray = ['André', 'Xico', 'Diogo', 'Carolina'];

function compare(a, b) {
  if (a < b) return -1;
  if (a === b) return 0;
  if (a > b) return 1;
}

namesArray.sort();

console.log(namesArray);

unsorted = [56, 2, 3978, 43, 3, 0];

//for number, use this comparison function
unsorted.sort((a, b) => a - b);

console.log(unsorted);

const greetings = ['Hey', 'hello', 'Ola', 'oi', 'aloha'];

/* greetings.sort(function (a, b) {
  if (a.toLowerCase() < b.toLowerCase()) return -1;
  if (a.toLowerCase() === b.toLowerCase()) return 0;
  if (a.toLowerCase() > b.toLowerCase()) return 1;
}); */

/* greetings.sort(function (a, b) {
  if (a.length < b.length) return -1;
  if (a.length === b.length) return 0;
  if (a.length > b.length) return 1;
}); */

console.log(greetings);

// Reverse - mutates the original

//greetings.reverse();
console.log(greetings);

//Spread Operator
let greetingsCopy = [...greetings];
greetingsCopy.reverse();
console.log(greetingsCopy);

//Debugging

// Identify the problem
// Isolate the source
// Fix the problem, or create a workaround

const multiply = (a, b) => {
  let result = 0;
  result = a * b;
  return result;
};

multiply(2, 3);

function add(n1, n2) {
  return n1 * n2;
}

function make_calc(n1, n2, operation) {
  if (operation === 'add') {
    return add(n1, n2);
  }
}

function init() {
  const result = make_calc(2, 4, 'add');
  console.log(result);
}

//init();

// try / catch block

function powerOfThree(num) {
  return number ** 3;
}

let userInfo = null;

/* try {
  //run your code
  powerOfThree(9);
  userInfo = 'André';
} catch (error) {
  //handle the error
  console.log('This only runs if there is an error');
  console.log(error);
} finally {
  console.log('This runs no matter what');
  userInfo = null;
} */

//console.log(userInfo);

const getUsername = (name) => {
  if (!name) {
    throw new SyntaxError('Please fill in the name');
  }
  return name;
};

try {
  getUsername();
} catch (error) {
  console.log(error);
}
