const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const catSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  color: {
    type: String,
    enum: ['Black', 'White', 'Orange'],
  },

  age: {
    type: Number,
    min: 0,
    max: 30,
  },
  profilePic: {
    type: String,
    default: 'https://i.kym-cdn.com/entries/icons/facebook/000/002/232/bullet_cat.jpg',
  },
  location: {
    address: String,
    zipCode: Number,
  },
  password: {
    type: String,
    match: `^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]).{8,32}$`,
  },
  toys: [String],
});

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;
