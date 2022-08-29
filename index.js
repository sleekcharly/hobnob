// import http module
const http = require("http");

// initialize request handler
const requestHandler = function (req, res) {
  res.writeHead(200, { "content-Type": "text/plain" });
  res.end("Hello, World!");
};

// initialize server with request handler function
const server = http.createServer(requestHandler);
// listen for incoming connection
server.listen(8080);