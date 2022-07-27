const express = require('express');

const app = express();

app.set('views', __dirname + '/public/views');
app.set('view engine', 'hbs');

app.get('/', (req, res, next) => {
  let data = {
    name: 'Diogo',
    lastName: 'Capitão',
    bootcamp: 'Web Dev',
    address: {
      street: 'Rua Jardim Doca do Tabaco',
      number: 87,
    },
    cities: ['Barcelona', 'Chicago', 'Tokyo', 'Moscow', 'Cairo', 'Paris'],
  };

  res.render('index', data);
});

app.listen(3000, () => console.log('Running on port 3000'));
