const http = require('http');
const server = http.createServer((request, response) => {
  //request is what's coming from the client
  //response is what we send back
  if (request.url === '/') {
    response.write('Hello world!');
    response.end();
  } else if (request.url === '/about') {
    response.write('André');
    response.end();
  } else {
    response.statusCode = 404;
    response.write('404 page');
    response.end();
  }
});

//Create an /about page that responds with your name
server.listen(3000);
