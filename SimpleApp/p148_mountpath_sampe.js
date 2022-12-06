var express = require("express");

var app = express();
var admin = express();

admin.get("/", function (req, res) {
  console.log(admin.mountpath);
  res.send("Admin Homepage");
});

var secret = express();
secret.get("/", function (req, res) {
  console.log(secret.mountpath);
  res.send("Admin Secret");
});

admin.use("/secret", secret);

app.use(["/adm*n", "/manager"], admin);

let server = app.listen(3000, function () {
  let host = server.address().address;
  let port = server.address().port;
  console.log(`Server started on http://${host}:${port}`);
});
