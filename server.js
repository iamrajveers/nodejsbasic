// server.js
const http = require('http');  // Import the 'http' module
// Create an HTTP server
const server = http.createServer((req, res) => {
  res.write('Hello, Node.js!');  // Send a response to the client
  res.end();  // End the response
});

// Make the server listen on port 3000
server.listen(3002, () => {
  console.log('Server is running on http://localhost:3002');
});
