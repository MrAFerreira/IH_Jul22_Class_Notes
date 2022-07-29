const mongoose = require('mongoose');
const Song = require('./models/Song.model');
const User = require('./models/User.model');

// Connect with mongoDB

/* mongoose
  .connect('mongodb://localhost/jul22example')
  .then((x) => console.log(`Connected to mongoDb, database name: ${x.connections[0].name}`))
  .catch((err) => console.log(err)); */
/* 
Song.create({
  title: 'Ride on Time',
  artists: ['Tatsuro Yamashita'],
  album: 'Ride on Time',
  release_date: Date.now(),
})
  .then((createdSong) => console.log(createdSong))
  .catch((err) => console.log(err)); */

//Models
//It allows us to create objects that have methods specific to communicating with mongoDB

//const Cat = mongoose.model('Cat', { name: String });

//This will create the cats collection

/* const kitty = new Cat({ name: 'Garfield' });

//save
kitty
  .save()
  .then((newCat) => console.log('New cat created', newCat))
  .catch((err) => console.log(err)); */

//Find

//return all documents from the collection
/* Cat.find()
  .then((allCats) => console.log(allCats))
  .catch((err) => console.log(err)); */

/* function addCat(catName) {
  const kitty = new Cat({ name: catName });

  kitty
    .save()
    .then((newCat) => console.log('New cat created', newCat))
    .catch((err) => console.log(err));
} */

/* for (let i = 0; i < 100; i++) {
  addCat(`Mr. Whiskers the ${i}`);
} */

/* Cat.find()
  .then((allCats) => console.log(allCats))
  .catch((err) => console.log(err));
 */

//Schemas

/* Cat.create({
  name: 'Pantufa',
  color: 'Orange',
  age: 29,
  location: {
    address: 'Ironhack Lisbon',
    zipCode: 8987,
  },
  profilePic: 'https://sm.mashable.com/mashable_sea/photo/default/950_49a6.jpg',
})
  .then((newCat) => console.log(newCat))
  .catch((err) => console.log(err)); */

//String, Number, Boolean, Date, Arrays, Objects, ObjectId

//CRUD
//Create
//Read
//Update
//Delete

let user1 = { name: 'André', job: 'Teacher', age: 28, email: 'a@ironhack.com' };
let user2 = { name: 'Xico', job: 'Teacher Assistant', age: 19, email: 'x@ironhack.com' };
let user3 = { name: 'Diogo', job: 'PM ', age: 31, email: 'd@ironhack.com' };

//Create

//insertMany - creates more than one
/* User.insertMany([user1, user2, user3])
  .then((users) => console.log(users))
  .catch((err) => console.log(err)); */

// Read

//Projection
/* User.find({ age: { $gte: 20 } }, 'name age')
  .then((user) => console.log(user))
  .catch((err) => console.log(err)); */

//Sort
/* User.find({}, null, { sort: { age: 1 } })
  .then((user) => console.log(user))
  .catch((err) => console.log(err));
 */

//findOne // findById

/* User.findOne({ name: 'Xico' })
  .then((user) => console.log(user))
  .catch((err) => console.log(err));
   */

/* User.findById('62e3c2bfc08a99a54ef80415')
  .then((user) => console.log(user))
  .catch((err) => console.log(err)); */

//Update

/* User.updateOne({ name: 'Xico' }, { job: 'Developer' })
  .then((user) => console.log(user))
  .catch((err) => console.log(err)); */

/* User.findByIdAndUpdate('62e3c2bfc08a99a54ef80415', { job: 'Admiral' }, { new: true })
  .then((user) => console.log(user))
  .catch((err) => console.log(err));
 */

//Delete
/* User.deleteOne({ name: 'Diogo' })
  .then((user) => console.log(user))
  .catch((err) => console.log(err));
   */
/* User.findByIdAndDelete('62e3c2bfc08a99a54ef80413')
  .then((user) => console.log(user))
  .catch((err) => console.log(err)); */

/* User.countDocuments({ year: { $gte: 2000 } })
  .then((count) => console.log(count))
  .catch((err) => console.log(err)); */

// Destructuring

let person = {
  name: 'Phil',
  location: 'Chicago',
  favouriteMusic: 'Hmm Pop',
  country: 'USA',
  address: {
    street: 'Rua Jardim Doca do Tabaco',
    number: 87,
  },
};
/* Old way:
let name = person.name;
let location = person.location;
let favouriteMusic = person.favouriteMusic; */

//With destructuring:
/* let { name, location: city, favouriteMusic: genre, country = 'Portugal' } = person; */

/* let {
  name,
  address: { street, number },
} = person;

console.log(name, street, number); */
/* console.log(`Hello ${name}`);
console.log(`You are from ${location}`);
console.log(`Your favourite music is ${favouriteMusic}`);
 */

const pokemon = {
  name: 'Snorlax',
  types: {
    main: 'Normal',
    secondary: 'Ground',
  },
  generation: 1,
  isCatchable: true,
};

// "Snorlax is from generation 1 and its type is Normal"

/* let {
  name,
  types: { main },
  generation,
} = pokemon;
 */
/* console.log(`${name} is from generation ${generation} and its type is ${main}`); */

// Array destructuring

const campuses = ['Lisbon', 'Barcelona', 'Paris'];

/* const [firstCampus, secondCampus, thirdCampus] = campuses;

console.log(firstCampus, secondCampus, thirdCampus);
´ */
const [firstCampus, , thirdCampus, fourthCampus = 'Berlin'] = campuses;

console.log(firstCampus, thirdCampus, fourthCampus);

/* const europeanCampuses = [
  ['barcelona', 'es'],
  ['lisbon', 'pt'],
  ['paris', 'fr'],
  ['berlin', 'de'],
];

const [[firstCity], [, secondCountry]] = europeanCampuses;

console.log(firstCity, secondCountry);
 */

let [a, b = 2, c, d = 1] = [3, 4];

console.log(a, b, c, d);
//a = 3
//b = 4
//c = undefined
//d = 1

// 3, 2, undefined, 1
// 3, 4, undefined, 1

//Spread
const reptiles = ['snake', 'iguana', 'crocodile', 'godzilla'];
const birds = ['eagle', 'falcon', 'seagull', 'pidgeotto'];

const animals = [...reptiles, ...birds];

console.log(animals);

//rest

function showMovie(title, year, ...actors) {
  console.log(actors);
  console.log(`${title} is from the year ${year} and the cast includes ${actors}`);
}

showMovie('The godfather', 1972, 'Al Paccino', 'Marlon Brando', 'Robert De Niro');
