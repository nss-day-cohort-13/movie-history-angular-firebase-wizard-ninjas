"use strict";

angular.module("movieHunter", [])
.controller("controller1", ['$scope', function($scope) {

  $scope.getSearchValue = () => {
    // This is hardcoded for now
    $scope.searchValue = "frozen";
  };



}]);

angular.module('scopeExample', [])
.controller('MyController', ['$scope', function($scope) {
  $scope.username = 'World';

  $scope.sayHello = function() {
    $scope.greeting = 'Hello ' + $scope.username + '!';
  };
}]);