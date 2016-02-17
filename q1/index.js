function doThing (cb) {
  cb(new Error());
}

function foo(callback) {
  doThing(function(err, res) {
    if (err) return callback(err);
    callback(null, res);
  });
}

module.exports = foo;