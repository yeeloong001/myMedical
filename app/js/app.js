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
  'ui.sortable',
  'LocalStorageModule',

  'myMedicalApp',
  'myMedicalAnimations'
    ])
 .config(['localStorageServiceProvider', function(localStorageServiceProvider){
  localStorageServiceProvider.setPrefix('ls');
}])
 .config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/home.html',
    controller: 'myScheduleCtrl'
  })
  .when('/medication-home', {
    templateUrl: 'partials/medication-home.html',
    controller: 'myScheduleCtrl'
  })
  .when('/medication-add', {
    templateUrl: 'partials/medication-add.html',
    controller: 'myScheduleCtrl'
  })
  .when('/doc-notes', {
    templateUrl: 'partials/doc-notes.html',
    controller: 'myScheduleCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
});


// .service("greeting", function Greeting() {

//   var greeting = this;

//   greeting.message = "Default";

// })

//  .controller("Firstctrl", function FirstCtrl(){

//   var first = this;

//   first.greeting = greeting;
//  }) 

//  .controller("Secondctrl", function SecondCtrl(){

//   var second = this;

//   second.greeting = greeting;

//  }) 

// var myMedicalApp = angular.module('myMedicalApp', [
//   'ngAnimate',
//   'ngAria',
//   'ngCookies',
//   'ngMessages',
//   'ngResource',
//   'ngRoute',
//   'ngSanitize',
//   'ngTouch',
//   'ui.sortable',
//   'LocalStorageModule',

//   'myMedicalApp',
//   'myMedicalAnimations'
//     ])

// myMedicalApp.config(['localStorageServiceProvider', function(localStorageServiceProvider){
//   localStorageServiceProvider.setPrefix('ls');
// }])

// myMedicalApp.config(function ($routeProvider) {
//   $routeProvider
//   .when('/', {
//     templateUrl: 'partials/my-schedule.html',
//     controller: 'myScheduleCtrl'
//   })
//   .when('/rec-food', {
//     templateUrl: 'partials/rec-food.html',
//     controller: 'recFoodCtrl'
//   })
//   .when('/food-glossary', {
//     templateUrl: 'partials/food-glossary.html',
//     controller: 'foodGlossaryCtrl'
//   })
//   .otherwise({
//     redirectTo: '/'
//   });
// });
