
movieHunter
  .controller("controller3", (function(moviePath, $scope) {

    $scope.currentMoviesObject = {};
    $scope.ratingsOptions = [1, 2, 3, 4, 5];

    $scope.asnychronousLoadMyMovies = function () {
      moviePath.getMoviesFromFirebase()
        .then(moviesObject => {
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

    $scope.changeWatched = function (movie) {
      movie.watched = !movie.watched;
    }

    $scope.submitChanges = function (id, movie) {
      console.log("edited movie: ", id, movie);

    };

  }))

