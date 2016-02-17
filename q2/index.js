var promisify = require('../lib/promisify');
function remoteMathService(cb) {
  var callOnePromise = promisify(callOneService);
  var callTwoPromise = promisify(callTwoService);

  Promise.all([callOnePromise(), callTwoPromise()])
    .then(function (values) {
      // sum values
      return values.reduce(function (accum, value) {
        return accum + value;
      }, 0);
    })
    .then(function (num) {
      cb(undefined, num);
    })
    .catch(function (err) {
      cb(err);
    });
}

function callOneService(cb) {
  setTimeout(function() {
    return cb(undefined, 1);
  }, 1000);
}

function callTwoService(cb) {
  setTimeout(function() {
    return cb(undefined, 2);
  }, 1500);
}

module.exports = remoteMathService;