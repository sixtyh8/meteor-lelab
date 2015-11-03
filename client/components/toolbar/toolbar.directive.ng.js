'use strict'

angular.module('meteorLelabApp')
.directive('toolbar', function() {
  return {
    restrict: 'AE',
    templateUrl: 'client/components/toolbar/toolbar.view.ng.html',
    replace: true,
    controller: function($scope, locale, localeSupported, localeEvents){
    	$scope.supportedLang = localeSupported;
        $scope.localeData = {
            'en-US': {
                flagClass: 'flag-us',
                langDisplayText: 'English'
            },
            'fr-FR': {
                flagClass: 'flag-fr',
                langDisplayText: 'Français'
            }
        };

        $scope.currentYear = new Date().getFullYear();
        $scope.fullName = 'Rahul Doshi';

        $scope.setLocale = function (loc) {
            locale.setLocale(loc);
        };

        locale.ready('common').then(function () {
            $scope.flagClass = $scope.localeData[locale.getLocale()].flagClass;
            $scope.langDisplayText = $scope.localeData[locale.getLocale()].langDisplayText;
        });

        $scope.$on(localeEvents.localeChanges, function (event, data) {
            $scope.flagClass = $scope.localeData[data].flagClass;
            $scope.langDisplayText = $scope.localeData[data].langDisplayText;
        });
    }
  };
});