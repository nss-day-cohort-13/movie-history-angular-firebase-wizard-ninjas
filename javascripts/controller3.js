
movieHunter
  .controller("controller3", (function(moviePath, $scope) {

    $scope.currentMoviesObject = {};
    
    $scope.asnychronousLoadMyMovies = function () {
      moviePath.getMoviesFromFirebase()
        .then(moviesObject => {
          console.log("movies object from async load", moviesObject );
          $scope.currentMoviesObject=moviesObject;
          $scope.$apply();
        })
        .catch(e => {console.log(e);}); 
    };
 

    $scope.currentRating = "";

    $scope.editMovie = function (id, movie) {
      console.log("eventually we'll add an edit function", id, movie);
    };

    $scope.deleteMovie = function(id, movie) {
      moviePath.deleteMovieFromFirebase(id, movie)
        .then($scope.asnychronousLoadMyMovies)
        // .then(moviesObject => {
          // $scope.currentMoviesObject = moviePath.getMoviesObject();
          // $scope.$apply();
        // })
        .catch(e => {console.log(e);});
    };

  }));
