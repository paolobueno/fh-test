function wait(millis) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, millis);
  });
}

/**
 * Simple exponential backoff function
 * @param  {Function} fn           The function to retry, should return a Promise
 * @param  {Number}   initialDelay The initial delay for the first retry
 * @param  {Number}   factor       The factor by which to increase the delay after each failure
 * @param  {Number}   tries        The maximum number of tries
 * @return {Promise}                A Promise that is resolved with the success value,
 *                                    or rejected with the last error if the maximum number of tries is reached
 */
module.exports = function backoff(fn, initialDelay, factor, tries) {
  initialDelay = initialDelay || 10;
  factor = factor || 2;
  tries = tries || 20;

  var tryCount = 1;
  var nextDelay = initialDelay;

  function doRetry(err) {
    if (tryCount < tries) {
      tryCount++;
      nextDelay *= factor;

      var delay = nextDelay / factor;
      return wait(delay)
        .then(function () {
          return fn();
        }).catch(doRetry);
    } else {
      throw err;
    }
  }

  return doRetry(undefined);
};