var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Hallo Express!");
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log(`I list on http://${host}:${port}`);
});
