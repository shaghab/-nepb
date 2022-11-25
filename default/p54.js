var http = require("http");
var server = http.createServer();

server.on("request", function (req, res) {
  res.end("This is the response");
});

server.listen(3000);
