'use strict'

angular.module('meteorLelabApp')
.controller('LoginCtrl', function($scope) {
  $scope.viewName = 'Login';

  // Meteor.loginWithPassword(email, password, function(err){
  //   if (err)
  //     // The user might not have been found, or their passwword
  //     // could be incorrect. Inform the user that their
  //     // login attempt has failed. 
  //   else
  //     // The user has been logged in.
  // });
});