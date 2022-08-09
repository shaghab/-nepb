function home() {
  console.log("Request 'home' called.");
}

function show() {
  console.log("Request 'show' called.");
}

function upload() {
  console.log("Request 'upload' called.");
}

exports.home = home;
exports.show = show;
exports.upload = upload;
