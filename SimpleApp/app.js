let express = require("express");
let app = express();

var adminRouter = express.Router();

adminRouter.get("/", function (req, res) {
  res.send("Homepage of admin area!");
});

adminRouter.get("/users", function (req, res) {
  res.send("show all users!");
});

adminRouter.get("/article", function (req, res) {
  res.send("show all articles!");
});

app.use("/admin", adminRouter);

app.get("/", function (req, res) {
  res.send("Hallo Express!");
});

let server = app.listen(3000, function () {
  let host = server.address().address;
  let port = server.address().port;

  console.log(`Server started on http://${host}:${port}`);
});
