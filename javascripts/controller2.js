"use strict";

angular.module("movieHunter")
  .controller("controller2", [
      "$scope",
      "factory1",
      "moviePath",
      function($scope, factory1, moviePath) {
        $scope.film = factory1.getFilm();
        $scope.searchedFilm = $scope.film;
        moviePath.postMovieToFirebase(film);
      }
    ])