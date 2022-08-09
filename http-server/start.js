var http = require("http");
var url = require("url");

function start() {
  console.log("Starting.");

  function onRequest(req, res) {
    var pathname = url.parse(req.url).pathname;
    console.log(`Request for path ${pathname} receivied.`);
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.write("The first server");
    res.end();
  }
  // use port 1337 unless there exists a preconfigured port
  var port = process.env.port || 1337;

  http.createServer(onRequest).listen(port);
  console.log("Has been started.");
}

exports.start = start;
