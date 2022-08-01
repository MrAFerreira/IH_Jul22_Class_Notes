const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
const myRecipe = {
  title: 'My breakfast',
  level: 'Amateur Chef',
  ingredients: [
    '1/2 cup rice vinegar',
    '5 tablespoons honey',
    '1/3 cup soy sauce (such as Silver Swan®)',
    '1/4 cup Asian (toasted) sesame oil',
    '3 tablespoons Asian chili garlic sauce',
    '3 tablespoons minced garlic',
    'salt to taste',
    '8 skinless, boneless chicken thighs',
  ],
  cuisine: 'Asian',
  dishType: 'main_course',
  image: 'https://images.media-allrecipes.com/userphotos/720x405/815964.jpg',
  duration: 40,
  creator: 'Chef HoverCat',
};

async function recipes() {
  try {
    //Connecting to DB
    await mongoose.connect(MONGODB_URI);

    //Resetting the DB
    await Recipe.deleteMany();

    //inserting 1 recipe
    let singleRecipe = await Recipe.create(myRecipe);
    console.log(singleRecipe.title);

    //inserting multiple recipes
    let multipleRecipes = await Recipe.insertMany(data);
    multipleRecipes.forEach((recipe) => console.log(recipe.title));

    //update one recipe
    await Recipe.findOneAndUpdate({ title: 'Rigatoni alla Genovese' }, { duration: 100 });
    console.log('Duration updated');

    //delete recipe
    await Recipe.deleteOne({ title: 'Carrot Cake' });
    console.log('No more cake!');

    mongoose.disconnect();
  } catch (err) {
    console.log(err);
  }
}

recipes();

///....

/* mongoose.connect()
.then(() => {
  return Recipe.create(recipe)
})
.then(() => {
  return Recipe.insertMany();
})
.then(()  => {
  console.log('deleted')
  mongoose.disconnect()
})
.catch((err) => console.log(err)) */
