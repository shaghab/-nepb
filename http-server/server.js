var http = require("http");
var fs = require("fs");

// use port 1337 unless there exists a preconfigured port
var port = process.env.port || 1337;

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
