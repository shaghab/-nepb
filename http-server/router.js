function route(pathname, handler, request, response) {
  console.log(`Route for path requested: ${pathname}`);

  if (typeof handler[pathname] === "function") {
    return handler[pathname](request, response);
  } else {
    console.log(`No Method found for ${pathname}`);
    return null;
  }
}

exports.route = route;
