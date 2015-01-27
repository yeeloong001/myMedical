'use strict';

/**
 * @ngdoc function
 * @name myMedicalApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myMedicalApp
 */
angular.module('myMedicalApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
