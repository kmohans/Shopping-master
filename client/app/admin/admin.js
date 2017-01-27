'use strict';

angular.module('shopingApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('admin', {
        title: 'Shop Settings - Payment Option ',
        url: '/admin',
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminCtrl',
        authenticate: true
      });
  });
