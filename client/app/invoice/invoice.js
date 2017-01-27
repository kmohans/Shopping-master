'use strict';

angular.module('shopingApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('invoice', {
        url: '/invoice',
        templateUrl: 'app/invoice/invoice.html',
        controller: 'InvoiceCtrl',
        authenticate: true
      });
  });
