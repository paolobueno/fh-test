/**
 * Simple promisifier for a function that expects a node-like callback
 * @param  {Function} fn Function to promisify, should expect a node-like callback as the last parameter
 * @return {Function}      the promisified wrapped version of the function
 */
module.exports = function promisify (fn) {
  return function () {
    var paramsArr = Array.prototype.slice.call(arguments);

    return new Promise(function (resolve, reject) {
      var callback = function (err, res) {
        if (err) {return reject(err);}
        resolve(res);
      };

      paramsArr.push(callback);

      fn.apply(this, paramsArr);
    });
  };
};