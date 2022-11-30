let express = require("express");
let app = express();

app.get("/", function (req, res) {
  res.send("Hallo Express!");
});

let server = app.listen(3000, function () {
  let host = server.address().address;
  let port = server.address().port;

  console.log(`I list on http://${host}:${port}`);
});
