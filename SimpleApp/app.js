let express = require("express");
let app = express();
app.set("view engine", "pug");

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

adminRouter.param("id", function (req, res, next, name) {
  console.log("Validating id ", id);
  var id = Number(req.params.id);
  if (!id) {
  } else {
    req.id = id;
    next();
  }
});

adminRouter.get("/users/:id", function (req, res) {
  res.send("ID: " + req.id + "!");
});

app.use("/admin", adminRouter);

app.get("/", function (req, res) {
  res.render("content", {
    title: "Hello Pug!",
  });
});

let server = app.listen(3000, function () {
  let host = server.address().address;
  let port = server.address().port;

  console.log(`Server started on http://${host}:${port}`);
});
