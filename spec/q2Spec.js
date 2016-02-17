var q2 = require('../q2');

describe('q2', function () {
  it('should sum the numbers correctly', function (done) {
    q2(function (err, res) {
      if (err) {return done(err);}

      expect(res).toEqual(3);
      done();
    });
  });
});