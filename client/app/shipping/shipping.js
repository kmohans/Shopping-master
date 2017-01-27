'use strict';

angular.module('shopingApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('shipping', {
        title: 'Shipping Settings',
        url: '/shipping',
        templateUrl: 'app/shipping/shipping.html',
        controller: 'ShippingCtrl'
      });
  });
