var fs = require("fs");

function home(response) {
  fs.readFile("./index.html", function (err, data) {
    response.writeHead(200, {
      "Content-Type": "text/html",
    });
    response.write(data);
    response.end();
  });

  return true;
}

function show(response) {
  response.writeHead(200, {
    "Content-Type": "text/plain",
  });
  response.write("Request 'show' called.");
  response.end();
  return true;
}

function upload(response) {
  response.writeHead(200, {
    "Content-Type": "text/plain",
  });
  response.write("Request 'upload' called.");
  response.end();
  return true;
}

exports.home = home;
exports.show = show;
exports.upload = upload;
