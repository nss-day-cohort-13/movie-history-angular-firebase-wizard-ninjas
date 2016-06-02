"use strict";

console.log("help");

movieHunter
.controller("controller1", ['$scope', 'factory1', function ($scope, factory1) {

  console.log("me");

  $scope.getSearchValue = (movieToSearch) => {

    factory1.searchOMDb(movieToSearch);

  };


}]);