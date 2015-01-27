'use strict';

/**
 * @ngdoc function
 * @name myMedicalApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myMedicalApp
 */
angular.module('myMedicalApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
