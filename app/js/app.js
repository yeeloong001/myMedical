'use strict';

/**
 * @ngdoc overview
 * @name myMedicalApp
 * @description
 * # myMedicalApp
 *
 * Main module of the application.
 */
angular
  .module('myMedicalApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',

    // 'phonecatControllers',
    // 'phonecatFilters',
    // 'phonecatAnimations'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/my-schedule.html',
        controller: 'mySchduleCtrl'
      })
      .when('/add-medication', {
        templateUrl: 'partials/add-medication.html',
        controller: 'addMedicationCtrl'
      })
      .when('/food-intake', {
        templateUrl: 'partials/food-intake.html',
        controller: 'foodIntakeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
