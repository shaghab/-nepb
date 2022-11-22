function route(pathname, handler, request, response, data) {
  console.log(`Route for path requested: ${pathname}`);
  var method = request.method;

  if (typeof handler[[pathname, method]] === "function") {
    return handler[[pathname, method]](request, response, data);
  } else {
    console.log(`No Method found for ${pathname} ${method}`);
    return null;
  }
}

exports.route = route;
