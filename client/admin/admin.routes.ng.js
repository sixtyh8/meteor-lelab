'use strict'

angular.module('meteorLelabApp')
.config(function($stateProvider) {
  $stateProvider
    .state('admin', {
      url: '/admin',
      templateUrl: 'client/admin/admin.view.ng.html',
      controller: 'AdminCtrl',
      resolve: {
        currentUser: ['$meteor', function($meteor) {
          return $meteor.requireUser();
        }]
      }
    })
    .state('admin.credits', {
      url: '/credits',
      templateUrl: 'client/credits/credits-list.view.ng.html',
      controller: 'CreditsListCtrl',
      resolve: {
        currentUser: ['$meteor', function($meteor) {
          return $meteor.requireUser();
        }]
      }
    });
});
