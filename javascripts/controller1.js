"use strict";

angular.module("movieHunter")
  .controller("controller1", ($scope) => {

    // this is the blank value that will be sent on submit to the umdb search factory.
    $scope.searchBarMovie = "";

   //on click, the 'movie search bar' variable becomes the argument to a function called 'send search'.
     $scope.sendSearch = function(movieToSearch) {
      console.log("search bar movie", $scope.searchBarMovie, "movie to search", movieToSearch ); 
     };

     $scope.getSearchValue = () => {
      // This is hardcoded for now
      $scope.searchValue = "frozen";
    };

  });

// angular.module('scopeExample', [])
// .controller('MyController', ['$scope', function($scope) {
//   $scope.username = 'World';

//   $scope.sayHello = function() {
//     $scope.greeting = 'Hello ' + $scope.username + '!';
//   };



// }]);
