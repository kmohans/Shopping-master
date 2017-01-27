'use strict';

describe('Controller: CustomerCtrl', function () {

  // load the controller's module
  beforeEach(module('shopingApp'));

  var CustomerCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CustomerCtrl = $controller('CustomerCtrl', {
      $scope: scope
    });
  }));

});
