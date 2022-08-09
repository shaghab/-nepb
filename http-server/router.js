function route(pathname, handler) {
  console.log(`Route for path requested: ${pathname}`);

  if (typeof handler[pathname] === "function") {
    return handler[pathname]();
  } else {
    console.log(`No Method found for ${pathname}`);
    return null;
  }
}

exports.route = route;
