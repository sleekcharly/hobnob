// import http module
// const http = require("http"); // CommonJS syntax
import http from "http"; // ES6 syntax
// initialize request handler

const requestHandler = function (req, res) {
  res.writeHead(200, {
    "Content-Type": "text/plain"
  });
  res.end("Hello, World!");
}; // initialize server with request handler function


const server = http.createServer(requestHandler); // listen for incoming connection

server.listen(8080);
console.log(`server listening on: ` + 8080);
