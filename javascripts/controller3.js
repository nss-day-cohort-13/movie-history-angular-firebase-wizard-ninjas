
movieHunter
  .controller("controller3", (function(moviePath, $scope) {

    $scope.currentMoviesObject = {};
    //running this on load and then having the movies object populate the dom on a CLICK because I can't figure out how to have the moviePath.getMoviesFromFirebase work inside a promise. I don't think it's returning a promise object any more.
    

    //this function populates the movies object in the factory. It does not appear to return a promise object.
    moviePath.getMoviesFromFirebase();

    //runs on 'load my movies' button. would love to have it load automatically, but I can't get it to run asynchronously. So for presentation, wait a second or two after doing anything, before clicking the load my movies button. 
    $scope.asnychronousLoadMyMovies = function () {
      return new Promise(function(resolve, reject) {
        moviePath.getMoviesFromFirebase(); 
      }).then($scope.getDaMovies())
        .catch(e => {console.log(e);});
    };

    $scope.loadMyMovies = function () {
      $scope.currentMoviesObject = moviePath.getMoviesObject();
      console.log("current movies object :", $scope.currentMoviesObject );
      return $scope.currentMoviesObject;
    };
 

    $scope.currentRating = "";

    $scope.editMovie = function (id, movie) {
      console.log("eventually we'll add an edit function");
    };

    $scope.deleteMovie = function(id, movie) {
      console.log("id", id );
      moviePath.deleteMovieFromFirebase(id);
      setTimeout(function(){
        $scope.loadMyMovies();
      }, 2000);
    };

  }));
