// server.js
const http = require('http');

const hostname = 'localhost';
const port = 8000;

// Create the server and define what it does
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Server running at” to “Simple server');
});

// Start listening for requests
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
