var backoff = require('../lib/backoff');

describe('backoff', function() {
  beforeAll(function() {
    this.fn = function() {
      return Promise.resolve('hello');
    };

    var retryCounter = 0;
    this.retryFn = function() {
      if (retryCounter < 2) {
        retryCounter++;
        return Promise.reject('keep calling!');
      } else {
        return Promise.resolve('hello');        
      }
    };
  });

  it('should forward a function\'s result', function(done) {
    backoff(this.fn).then(function(res) {
      expect(res).toEqual('hello');
      done();
    });
  });

  it('should retry properly', function(done) {
    backoff(this.retryFn)
      .then(function(res) {
        expect(res).toEqual('hello');
        done();
      });
  });
});