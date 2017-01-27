'use strict';

angular.module('shopingApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('inventory', {
        url: '/inventory',
        templateUrl: 'app/inventory/inventory.html',
        controller: 'InventoryCtrl'
      });
  });