var http = require("http");
var url = require("url");

function start(router, handler) {
  //console.log("Starting.");

  function onRequest(req, res) {
    var pathname = url.parse(req.url).pathname;
    if (router.route(pathname, handler)) {
      res.writeHead(200, {
        "Content-Type": "text/plain",
      });
      res.write("Hello router");
      res.end();
    } else {
      res.writeHead(404, {
        "Content-Type": "text/plain",
      });
      res.write("404 not found");
      res.end();
    }
  }
  // use port 1337 unless there exists a preconfigured port
  var port = process.env.port || 1337;

  http.createServer(onRequest).listen(port);
  console.log("Has been started.");
}

exports.start = start;
