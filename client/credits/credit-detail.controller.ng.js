'use strict'

angular.module('meteorLelabApp')
.controller('CreditDetailCtrl', function($scope, $stateParams, $meteor) {
  $scope.credit = $scope.$meteorObject(Credits, $stateParams.creditId);
  $scope.$meteorSubscribe('credits');
  
  $scope.save = function() {
    if($scope.form.$valid) {
      $scope.credit.save().then(
        function(numberOfDocs) {
          console.log('save successful, docs affected ', numberOfDocs);
        },
        function(error) {
          console.log('save error ', error);
        }
      )
    }
  };
        
  $scope.reset = function() {
    $scope.credit.reset();
  };
});