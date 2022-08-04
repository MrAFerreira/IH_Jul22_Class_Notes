const router = require('express').Router();
const { default: axios } = require('axios');
const ApiService = require('../services/api.service');

const characterApi = new ApiService();

//Our route, from our own API/server
//Get all characters
router.get('/characters', (req, res, next) => {
  /*  characterApi
    .getAllCharacters()
    .then((response) => {
      res.render('pages/characters-list', { characters: response.data });
    })
    .catch((err) => console.log(err)); */

  axios
    .get('https://ih-crud-api.herokuapp.com/characters')
    .then((response) => {
      res.render('pages/characters-list', { characters: response.data });
    })
    .catch((err) => console.log(err));
});

//Render the create form
router.get('/characters/create', (req, res, next) => {
  res.render('pages/new-character-form');
});

//Render the edit form
router.get('/characters/edit/:id', (req, res, next) => {
  const { id } = req.params;
  characterApi
    .getOneCharacter(id)
    .then((response) => {
      res.render('pages/edit-character-form', { character: response.data });
    })
    .catch((err) => console.log(err));
});

//Get one character
router.get('/characters/:id', (req, res, next) => {
  const { id } = req.params;
  characterApi
    .getOneCharacter(id)
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => console.log(err));
});

//Create a character
router.post('/characters/create', (req, res, next) => {
  const { name, occupation, weapon } = req.body;

  characterApi
    .createCharacter({ name, occupation, weapon })
    .then((response) => {
      res.redirect('/characters');
    })
    .catch((err) => console.log(err));
});

//Edit a character
//Needs to be a post because html forms only send GET and POST requests
router.post('/characters/edit/:id', (req, res, next) => {
  const { id } = req.params;
  const { name, occupation, weapon } = req.body;

  characterApi
    .editCharacter(id, { name, occupation, weapon })
    .then((response) => {
      res.redirect('/characters');
    })
    .catch((err) => console.log(err));
});

//Delete character
router.get('/characters/delete/:id', (req, res, next) => {
  const { id } = req.params;
  characterApi
    .deleteCharacter(id)
    .then((response) => {
      res.redirect('/characters');
    })
    .catch((err) => console.log(err));
});

module.exports = router;
