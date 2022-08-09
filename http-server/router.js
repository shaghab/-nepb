function route(pathname, handler, response) {
  console.log(`Route for path requested: ${pathname}`);

  if (typeof handler[pathname] === "function") {
    return handler[pathname](response);
  } else {
    console.log(`No Method found for ${pathname}`);
    return null;
  }
}

exports.route = route;
