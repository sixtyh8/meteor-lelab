'use strict'

angular.module('meteorLelabApp')
.config(function($stateProvider) {
  $stateProvider
  .state('credits-list', {
    url: '/credits',
    templateUrl: 'client/credits/credits-list.view.ng.html',
    controller: 'CreditsListCtrl'
  })
  .state('credit-detail', {
    url: '/credits/:creditId',
    templateUrl: 'client/credits/credit-detail.view.ng.html',
    controller: 'CreditDetailCtrl'
  });
});