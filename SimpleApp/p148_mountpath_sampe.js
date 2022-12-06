var express = require("express");

var app = express();
var admin = express();

admin.get("/", function (req, res) {
  console.log(admin.mountpath);
  res.send("Admin Homepage");
});

app.use("/admin", admin);

let server = app.listen(3000, function () {
  let host = server.address().address;
  let port = server.address().port;
  console.log(`Server started on http://${host}:${port}`);
});
