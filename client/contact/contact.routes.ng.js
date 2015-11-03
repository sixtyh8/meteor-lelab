'use strict'

angular.module('meteorLelabApp')
.config(function($stateProvider) {
  $stateProvider
  .state('contact', {
    url: '/contact',
    templateUrl: 'client/contact/contact.view.ng.html',
    controller: 'ContactCtrl'
  });
});