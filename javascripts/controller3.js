
movieHunter
  .controller("controller3", (function(moviePath, $scope) {

    $scope.currentMoviesObject = {};

    $scope.asnychronousLoadMyMovies = function () {
      moviePath.getMoviesFromFirebase()
        .then(moviesObject => {
          console.log("loaded movies: ", moviesObject);
          $scope.currentMoviesObject=moviesObject;
          $scope.$apply();
        })
        .catch(e => {console.log(e);});
    };


    $scope.currentRating = "";

    $scope.editMovie = function (id, movie) {
      moviePath.patchMovieToFirebase(id, movie)
        .then($scope.asnychronousLoadMyMovies)
        .catch(e => {console.log(e);});
    };

    $scope.deleteMovie = function(id, movie) {
      moviePath.deleteMovieFromFirebase(id, movie)
        .then($scope.asnychronousLoadMyMovies)
        .catch(e => {console.log(e);});
    };

    $scope.switchWatched = function (id, movie) {
      movie.watched = !movie.watched;
      console.log("id: ", id);
      console.log("movie: ", movie);
    }

  }));
