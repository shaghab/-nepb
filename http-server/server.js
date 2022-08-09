var server = require("./start");
server.start();

/*
var http = require("http");
// use port 1337 unless there exists a preconfigured port
var port = process.env.port || 1337;
// express way ****************
var express = require("express");
var path = require("path");



var app = express();
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(port);
console.log("Request with Express on Post " + port);

// no express way ****************
var fs = require("fs");

http
  .createServer(function (req, res) {
    console.log("Starting on Port " + port);
    res.writeHead(200, {
      "Content-Type": "text/html",
      "Access-Control-Allow-Origin": "*", // allow requesting code from any origin to access the resource
    });
    var read = fs.createReadStream(__dirname + "/index.html");
    read.pipe(res);
  })
  .listen(port);
*/
