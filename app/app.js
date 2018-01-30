'use strict';
// This module represents the app. Currently has no dependencies.
var app = angular.module('Todo', []);
// adds a controller that takes 2 arguments: 
// First, is the name of the controller.
// Second is a function that contains the logic used by the controller.
// $scope is the link between the controller and the view
app.controller('TodoCtrl', function($scope){
    // Adds a message to the scope.
    //  Needs to be added to the page. This is called data binding.
    $scope.message = 'Angular is pretty cool';
    $scope.todos = [
        'Learn to Sketch',
        'Look at Dribble and deel inferior',
        'Actually learn how to use the Pen tool'
    ];
});