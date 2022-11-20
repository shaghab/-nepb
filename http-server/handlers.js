var fs = require("fs");

function home(request, response) {
  if (request.method !== "GET") {
    response.writeHead("405");
    response.end();
  }
  fs.readFile("views/home.html", function (err, data) {
    response.writeHead(200, {
      "Content-Type": "text/html",
    });
    response.write(data);
    response.end();
  });

  return true;
}

function show(request, response) {
  if (request.method !== "GET") {
    response.writeHead("405");
    response.end();
  }
  fs.readdir("files", function (err, list) {
    response.writeHead(200, { "Content-Type": "text/html" });
    var html = "<html><head></head>" + "<body><h1>File Manager</h1>";
    if (list.length) {
      html += "<ul>";
      for (i = 0; i < list.length; i++) {
        html +=
          '<li><a href="/show?fn=' + list[i] + '">' + list[i] + "</a></li>";
      }
      html += "</ul>";
    } else {
      html += "<h2>No files found</h2";
    }
    html += "</body></html>";
    response.write(html);
    response.end();
  });
  return true;
}

function upload(request, response) {
  if (request.method !== "GET") {
    response.writeHead("405");
    response.end();
  }
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
