'use strict'

angular.module('meteorLelabApp')
.controller('CreditsListCtrl', function($scope, $meteor) {
  $scope.page = 1
  $scope.perPage = 25
  $scope.sort = {name_sort : 1};
  $scope.orderProperty = '1'

  console.log('CreditsListCtrl');
  
  $scope.credits = $scope.$meteorCollection(function() {
    return Credits.find({}, {sort:$scope.getReactively('sort')});
  });
  $meteor.autorun($scope, function() {
    $scope.$meteorSubscribe('credits', {
      limit: parseInt($scope.getReactively('perPage')),
      skip: parseInt(($scope.getReactively('page') - 1) * $scope.getReactively('perPage')),
      sort: $scope.getReactively('sort')
    }, $scope.getReactively('search')).then(function() {
      $scope.creditsCount = $scope.$meteorObject(Counts, 'numberOfCredits', false);
    });
  });

  $meteor.session('creditsCounter').bind($scope, 'page');
    
  $scope.save = function() {
    if($scope.form.$valid) {
      $scope.credits.save($scope.newCredit);
      $scope.newCredit = undefined;
    }
  };
      
  $scope.remove = function(credit) {
    $scope.credits.remove(credit);
  };
    
  $scope.pageChanged = function(newPage) {
    $scope.page = newPage;
  };
    
  $scope.$watch('orderProperty', function() {
    if($scope.orderProperty) {
      $scope.sort = {name_sort: parseInt($scope.orderProperty)};
    }
  });
});
        