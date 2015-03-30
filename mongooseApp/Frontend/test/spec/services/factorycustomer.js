'use strict';

describe('Service: FactoryCustomer', function () {

  // load the service's module
  beforeEach(module('mongooseAppApp'));

  // instantiate service
  var FactoryCustomer;
  beforeEach(inject(function (_FactoryCustomer_) {
    FactoryCustomer = _FactoryCustomer_;
  }));

  it('should do something', function () {
    expect(!!FactoryCustomer).toBe(true);
  });

});
