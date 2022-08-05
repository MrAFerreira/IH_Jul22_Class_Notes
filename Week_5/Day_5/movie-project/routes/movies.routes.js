const router = require('express').Router();
const Movie = require('../models/Movie.model');
const fileUploader = require('../config/cloudinary.config');

router.get('/movies/create', (req, res, next) => {
  res.render('movies/movie-create');
});

// cloudinary  multer multer-storage-cloudinary

router.post('/movies/create', fileUploader.single('imageUrl'), (req, res, next) => {
  const { title, description } = req.body;
  const imageUrl = req.file.path;

  Movie.create({ title, description, imageUrl })
    .then((newMovie) => res.redirect('/movies'))
    .catch((err) => next(err));
});

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then((movies) => {
      res.render('movies/movie-list', { movies });
    })
    .catch((err) => next(err));
});

router.get('/movies/:id/edit', (req, res, next) => {
  const { id } = req.params;

  Movie.findById(id)
    .then((movie) => res.render('movies/movie-edit', movie))
    .catch((err) => next(err));
});

router.post('/movies/:id/edit', fileUploader.single('imageUrl'), (req, res, next) => {
  const { id } = req.params;
  const { title, description, previousUrl } = req.body;

  let imageUrl;

  if (req.file) {
    imageUrl = req.file.path;
  } else {
    imageUrl = previousUrl;
  }

  Movie.findByIdAndUpdate(id, { title, description, imageUrl })
    .then(() => res.redirect('/movies'))
    .catch((err) => next(err));
});

module.exports = router;
