function doThing (cb) {
  cb(undefined, 'hello');
}

function foo(callback) {
  doThing(function(err, res) {
    if (err) return callback(err);
    callback(null, res);
  });
}

module.exports = foo;