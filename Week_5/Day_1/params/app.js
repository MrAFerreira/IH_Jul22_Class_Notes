const express = require('express');
const app = express();
const hbs = require('hbs');
//Require the bodyparser middleware and use it on the app
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

function fakeMiddleware(req, res, next) {
  req.secret = 'Pikachu is not the best.';
  console.log('fake middleware was called');
  next();
}

app.use(fakeMiddleware);

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.get('/', (req, res, next) => {
  res.render('index');
});

//Route Params
app.get('/user/:username', (req, res, next) => {
  let username = req.params.username;

  User.findOne({ username }).then((foundUser) => {
    res.render('profile', foundUser);
  });
});

app.get('/user/:username/books/:id', (req, res, next) => {
  res.send(req.params);
});

// Query Params / Query String
app.get('/search', (req, res, next) => {
  res.send(req.query);
});

app.get('/login', (req, res, next) => {
  res.render('login');
});

app.post('/login', (req, res, next) => {
  let { username, password, pokemon } = req.body;

  console.log(`Username: ${username}, password: ${password}, favourite pokemon: ${pokemon}`);
  res.redirect('/');
});

app.get('/test', (req, res, next) => {
  res.send(req.secret);
});

app.get('/movies', (req, res, next) => {
  res.render('movies');
});

app.get('/collection', (req, res, next) => {
  console.log(req.query);
  res.render('collection', req.query);
});

//Create a get route /movies that renders a movies.hbs
//Create movies.hbs - form w/ get and action - /collection
//Title - text, rating - number, genre -text, duration - number, release-date - date
// get /collection - Extract the information you got from the form
// Render a collection.hbs where you display that information (that you get from the get request)

app.listen(3000, () => console.log('App listening on port 3000'));
