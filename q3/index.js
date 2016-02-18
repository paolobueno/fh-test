var promisify = require('../lib/promisify');
var backoff = require('../lib/backoff');


// This is a mock database implementation with just a connect function
// db.connect will need to be called a total of 10 times before it successfully connects
var counter = 0;

var db = {
  connect: function(cb) {
    console.log('connection attempt', counter + 1);
    if (counter < 9) {
      counter++;
      return cb('db not ready yet');
    }
    return cb(undefined, 'connected');
  }
};

// Try to connect, log a successful connection & exit
// If we fail to connect, log an error and return
backoff(promisify(db.connect)).then(function (res) {
  console.log(res);
}).catch(function (err) {
  console.log(err);
});