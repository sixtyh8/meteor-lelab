'use strict'

angular.module('meteorLelabApp')
.config(function($stateProvider) {
  $stateProvider
  .state('engineers', {
    url: '/engineers',
    templateUrl: 'client/engineers/engineers.view.ng.html',
    controller: 'EngineersCtrl'
  });
});