'use strict';

angular.module('myMedicalApp')
.controller('myScheduleCtrl', function ($http, $scope, localStorageService) {

	$http.get('medication/ailments.json').success(function(data) {
      $scope.ailments = data;
    });

    $http.get('medication/users.json').success(function(data) {
      $scope.users = data;
    });

	var todosInStore = localStorageService.get('todos');

	$scope.todos = todosInStore || [];

	$scope.$watch('todos', function () {
		localStorageService.set('todos', $scope.todos);
	}, true);

	$scope.addTodo = function () {
		$scope.todos.push($scope.todo);
		$scope.todo = '';
	};
	$scope.removeTodo = function (index) {
		$scope.todos.splice(index, 1);
	};

	//parse date and time of local computer
	$scope.dt = new Date();

});

// var myMedicalAppControllers = angular.module('myMedicalAppControllers', ['ui.bootstrap']);

// myMedicalAppControllers.controller('myScheduleCtrl', function ($http, $scope, localStorageService) {

// 	$http.get('medication/ailments.json').success(function(data) {
//       $scope.ailments = data;
//     });

// 	var todosInStore = localStorageService.get('todos');

// 	$scope.todos = todosInStore || [];

// 	$scope.$watch('todos', function () {
// 		localStorageService.set('todos', $scope.todos);
// 	}, true);

// 	$scope.addTodo = function () {
// 		$scope.todos.push($scope.todo);
// 		$scope.todo = '';
// 	};
// 	$scope.removeTodo = function (index) {
// 		$scope.todos.splice(index, 1);
// 	};

// });

// myMedicalAppControllers.controller('foodGlossaryCtrl', function ($scope) {
//   $scope.oneAtATime = true;

//   $scope.groups = [
//     {
//       title: 'Dynamic Group Header - 1',
//       content: 'Dynamic Group Body - 1'
//     },
//     {
//       title: 'Dynamic Group Header - 2',
//       content: 'Dynamic Group Body - 2'
//     }
//   ];

//   $scope.items = ['Item 1', 'Item 2', 'Item 3'];

//   $scope.addItem = function() {
//     var newItemNo = $scope.items.length + 1;
//     $scope.items.push('Item ' + newItemNo);
//   };

//   $scope.status = {
//     isFirstOpen: true,
//     isFirstDisabled: false
//   };
// });

