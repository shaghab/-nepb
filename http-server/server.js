var server = require("./start");
var router = require("./router");
var requestHandlers = require("./handlers");

var handler = {}; // declaring emmpoty object
handler["/"] = requestHandlers.home;
handler["/show"] = requestHandlers.show;
handler["/upload"] = requestHandlers.upload;

server.start(router.route, handler);
