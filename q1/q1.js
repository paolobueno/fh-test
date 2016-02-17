// doThing() defined elsewhere
function foo(callback) {
  doThing(function(err, res) {
    if (err) callback(err);
    callback(null, res);
  });
}

foo(function(err, res) {
  console.log('Done!', res).
});