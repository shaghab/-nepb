var express = require("express");

var app = express();
var admin = express();

admin.get("/", function (req, res) {
  console.log(admin.mountpath);
  res.send("Admin Homepage");
});

admin.on("mount", function (parent) {
  console.log("Admin mounted");
  //console.log(parent);
});

var secret = express();
secret.get("/", function (req, res) {
  console.log(secret.mountpath);
  res.send("Admin Secret");
});

admin.use("/secret", secret);

app.use(["/adm*n", "/manager"], admin);

app.param("id", function (req, res, next, id) {
  console.log("Called once", id);
  next();
});

app.get("/user/:id", function (req, res, next) {
  console.log("Will be reached");
  next();
});

app.get("/user/:id", function (req, res) {
  console.log("And this too");
  res.end();
});

let server = app.listen(3000, function () {
  let host = server.address().address;
  let port = server.address().port;
  console.log(`Server started on http://${host}:${port}`);
});
