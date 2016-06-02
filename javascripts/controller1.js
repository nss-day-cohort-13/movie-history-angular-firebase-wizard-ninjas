"use strict";

movieHunter
.controller("controller1", ['$scope', 'factory1', function ($scope, factory1) {

  $scope.searchBarMovie = "";

  $scope.getSearchValue = (movieToSearch) => {

    movieToSearch = movieToSearch.toLowerCase();

    factory1.searchOMDb(movieToSearch);

  };

}]);
