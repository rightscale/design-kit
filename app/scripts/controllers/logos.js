'use strict';

/**
 * @ngdoc function
 * @name designkitApp.controller:LogosCtrl
 * @description
 * # LogosCtrl
 * Controller of the designkitApp
 */
angular.module('designkitApp')
  .controller('LogosCtrl', function ($scope, $rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.sectionClass = 'section-logos';
    $rootScope.bodyClass = 'layout-logos';

  });
