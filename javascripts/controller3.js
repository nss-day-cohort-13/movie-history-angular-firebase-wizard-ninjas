
movieHunter
  .controller("controller3", (function(moviePath, $scope) {

    $scope.currentMoviesObject = {};
    
    $scope.asnychronousLoadMyMovies = function () {
      console.log("load my movies function is working" );
      moviePath.getMoviesFromFirebase()
        .then(moviesObject => {
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
      console.log("trying to make a delete movie function", id, movie );
    };

  }));
