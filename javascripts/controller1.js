"use strict";

movieHunter
.controller("controller1", ['$scope', 'factory1', function ($scope, factory1) {

  $scope.searchBarMovie = "";

  $scope.getSearchValue = function (movieToSearch) {
    var movieToSearch = movieToSearch.toLowerCase();

    factory1.searchOMDb(movieToSearch, function(data){
    	console.log(data);
    	$scope.film = data;
    });
  };

}]);

// Javascripts
// var film = document.getElementById("input").value;
// function toDOM (film) {
// 	document.getElementById("output").innerHTML =
// 		`<p>${film.name}</p>`
// }

