// Create the song model and schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  artists: {
    type: [String],
    required: true,
  },
  album: {
    type: String,
    required: true,
  },
  release_date: {
    type: Date,
    required: true,
    //default: Date.now
  },
  genre: [String],
  duration: {
    type: Number,
    min: 0,
  },
  released: Boolean,
  format: {
    type: String,
    enum: ['album', 'single', 'digital'],
  },
  popularity: {
    type: Number,
    min: 0,
    max: 100,
  },
  creator: {
    type: Schema.Types.ObjectId,
    //reference to the model
    ref: 'User',
  },
});

const Song = mongoose.model('Song', songSchema);

//songs

module.exports = Song;

//title - String - required
//artists - Array of Strings - required
//album - String - required
//release_date - Date - required
//genre - Array of Strings
//duration - Number - min 0
//released - boolean
//format - String - "album", "single", "digital"
//popularity - number from 0 to 100
