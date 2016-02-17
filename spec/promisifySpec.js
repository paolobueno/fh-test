var promisify = require('../lib/promisify');

describe('promisify', function() {
  beforeAll(function () {
    this.fn = function (cb) {
      cb(undefined, 'hello!');
    };

    this.errorFn = function (cb) {
      cb(new Error());
    };

    this.paramFn = function(param, cb) {
      cb(undefined, param);
    };
  });

  it('should wrap a node-like function', function (done) {
    promisify(this.fn)().then(done);
  });

  it('should reject on an error', function (done) {
    promisify(this.errorFn)().catch(function(error) {
      expect(error).not.toBeUndefined();
      done();
    });
  });

  it('should accept params', function (done) {
    var fixture = 'hello';
    promisify(this.paramFn)(fixture).then(function (res) {
      expect(res).toEqual(fixture);
      done();
    });
  });
});