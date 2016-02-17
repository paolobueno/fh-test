var q1 = require('../q1');

describe('Q1', function () {
  var spy = jasmine.createSpy('q1Callback');
  beforeEach(function (done) {
    q1(spy);

    // wait a bit to let q1 call multiple times if it does so
    setTimeout(done, 10);
  });

  it('should only call the callback once', function() {
    expect(spy.calls.count()).toEqual(1);
  });
});