"use strict";

require("@babel/polyfill");

var _http = _interopRequireDefault(require("http"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import polyfill to allow us use new Javascript APIs, such as fetch.
// import http module
// const http = require("http"); // CommonJS syntax
// ES6 syntax
// initialize request handler
const requestHandler = function (req, res) {
  res.writeHead(200, {
    "Content-Type": "text/plain"
  });
  res.end("Hello, Everybody!");
}; // initialize server with request handler function


const server = _http.default.createServer(requestHandler); // listen for incoming connection


server.listen(8080);
console.log(`server listening on: ` + 8080);