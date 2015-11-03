'use strict'

angular.module('meteorLelabApp')
.config(function($stateProvider) {
  $stateProvider
  .state('studio', {
    url: '/studio',
    templateUrl: 'client/studio/studio.view.ng.html',
    controller: 'StudioCtrl'
  });
});