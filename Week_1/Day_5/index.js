/* const squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10];

let dice;

let player1 = {
  name: 'Majid',
  color: 'red',
  position: 0,
  cash: 1000,
};
let player2 = {
  name: 'Luis',
  color: 'green',
  position: 0,
  cash: 1000,
};
let player3 = {
  name: 'Andrea',
  color: 'yellow',
  position: 0,
  cash: 1000,
};

//player1 move
dice = Math.floor(Math.random() * 6) + 1;

player1.position = (player1.position + dice) % squares.length;

player1.cash += squares[player1.position];

if (player1.cash <= 0) {
  console.log(`Game over for ${player1.name}`);
}

//player2 move
dice = Math.floor(Math.random() * 6) + 1;

player2.position = (player2.position + dice) % squares.length;

player2.cash += squares[player2.position];

if (player2.cash <= 0) {
  console.log(`Game over for ${player2.name}`);
}

//player3 move
dice = Math.floor(Math.random() * 6) + 1;

player3.position = (player3.position + dice) % squares.length;

player3.cash += squares[player3.position];

if (player3.cash <= 0) {
  console.log(`Game over for ${player3.name}`);
}

console.log(player1);
console.log(player2);
console.log(player3);
 */

//Improved with methods

const squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10];

let dice;
/* 
let player1 = {
  name: 'Majid',
  color: 'red',
  position: 0,
  cash: 1000,
  move() {
    dice = Math.floor(Math.random() * 6) + 1;

    this.position = (this.position + dice) % squares.length;

    this.cash += squares[this.position];

    if (this.cash <= 0) {
      console.log(`Game over for ${this.name}`);
    }
  },
  displayInfo() {
    console.log(`${this.name} is in position ${this.position}, with ${this.cash}`);
  },
};
let player2 = {
  name: 'Luis',
  color: 'green',
  position: 0,
  cash: 1000,
  move() {
    dice = Math.floor(Math.random() * 6) + 1;

    this.position = (this.position + dice) % squares.length;

    this.cash += squares[this.position];

    if (this.cash <= 0) {
      console.log(`Game over for ${this.name}`);
    }
  },
  displayInfo() {
    console.log(`${this.name} is in position ${this.position}, with ${this.cash}`);
  },
};
let player3 = {
  name: 'Andrea',
  color: 'yellow',
  position: 0,
  cash: 1000,
  move() {
    dice = Math.floor(Math.random() * 6) + 1;
    this.position = (this.position + dice) % squares.length;
    this.cash += squares[this.position];
    if (this.cash <= 0) {
      console.log(`Game over for ${this.name}`);
      this.lost = true;
    }
  },
  displayInfo() {
    console.log(`${this.name} is in position ${this.position}, with ${this.cash}`);
  },
}; */

// Moving the players

/* for (let i = 0; i <= 1000; i++) {
  player1.move();
  player2.move();
  player3.move();
}

player1.displayInfo();
player2.displayInfo();
player3.displayInfo(); */

// Create an object called library that has a property shelf which is an empty array

// Create a addBook method that receives a title as an argument (it will be a string), and adds it to the shelf array

//Create a printLibrary method that prints all the books in the shelf

// BONUS: Print the books in a single string separated by a comma and a space

/* let library = {
  shelf: [],
  addBook(title) {
    this.shelf.push(title);
  },
  printLibrary() {
    console.log(this.shelf.join(', '));
  },
};

library.addBook('Lord of the Rings');
library.addBook('Silmarillion');
library.addBook('Moby Dick');

library.printLibrary(); */

// class

class Player {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.position = 0;
    this.cash = 1000;
  }

  move() {
    dice = Math.floor(Math.random() * 6) + 1;
    this.position = (this.position + dice) % squares.length;
    this.cash += squares[this.position];
    if (this.cash <= 0) {
      console.log(`Game over for ${this.name}`);
    }
  }

  displayInfo() {
    console.log(`${this.name} is in position ${this.position}, with ${this.cash}`);
  }
}

//let player1 = new Player('Majid', 'red');

//calling new triggers the constructor and creates the object
/* player1 = {}
player1.name = 'Majid'
player1.color = 'red';
player1.position = 0;
player1.cash = 1000 */

/* let player2 = new Player('Luis', 'green');
let player3 = new Player('Andrea', 'yellow');

player1.move();
player2.move();
player3.move();

player1.move();
player2.move();
player3.move();

player1.displayInfo();
player2.displayInfo();
player3.displayInfo(); */

class Animal {
  constructor(name, color, sound) {
    this.name = name;
    this.color = color;
    this.sound = sound;
  }

  makeSound() {
    console.log(this.sound);
  }
}

let randomAnimal = new Animal('Bubbles', 'grey', 'meow');

//Inheritance

class Cat extends Animal {
  constructor(name, color, sound, isAsleep) {
    //refers to the properties of the parent class
    super(name, color, sound);
    //here we declare the new properties
    this.isAsleep = isAsleep;
  }

  changeAwake() {
    this.isAsleep = !this.isAsleep;
  }
}

let garfield = new Cat('Garfield', 'orange', 'hmmmm', false);

garfield.changeAwake();

console.log(garfield);
garfield.makeSound();

class Penguin extends Animal {
  //variables we will receive
  constructor(name, fishCaught) {
    super(name, 'black and white', 'Pardon, excuse me!');
    //this.name = name
    this.fishCaught = fishCaught;
  }
}

let happy = new Penguin('Happy Feet', 7);

happy.makeSound();
console.log(happy);

//Create a Whale class that extends animal

// property - eaten which is an empty array []

//create a method called eat(food) that accepts a string (food), and adds that food to the eaten array. It also makes the walhe soun

//create a new whale called Moby, white, Yum!
// make the whale eat Ahab and Pequod (separately)

class Whale extends Animal {
  constructor(name, color, sound) {
    super(name, color, sound);
    this.eaten = [];
  }
  makeSound() {
    console.log(this.sound.toUpperCase());
  }

  eat(food) {
    this.eaten.push(food);
    this.makeSound();
  }
}

let moby = new Whale('Moby', 'white', 'Yum!');

moby.eat('Ahab');
moby.eat('Pequod');

console.log(moby);

//4 pillars of OOP - Object Oriented Programming

//Inheritance - Extending a class into additional ones

// Abstraction - Hide the way the methods and fuctions work

// Polymorphism - changing the functionality of an inherited method

// encapsulation - Grouping data and methods that belong together
