'use strict'

angular.module('meteorLelabApp')
.config(function($stateProvider) {
  $stateProvider
  .state('mastering', {
    url: '/mastering',
    templateUrl: 'client/mastering/mastering.view.ng.html',
    controller: 'MasteringCtrl'
  });
});