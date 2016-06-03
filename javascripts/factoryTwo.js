/*
Any controller that needs access to these methods
MUST include this factory ('moviePath') in its function arguments
*/
"use strict";

movieHunter.factory("moviePath", (function($http) {

  const FB_URL = "https://movie-hunter.firebaseio.com/";
  let myMovies = {};

  return {
    // GET from firebase
    getMoviesFromFirebase () {
      return new Promise(function(resolve, reject) {
        $http.get(`${FB_URL}.json`)
          .then(ret => {
            console.log("data", ret );
            myMovies = ret.data;
            resolve(myMovies);
          }
        );
      });
    },
			/*
				POST to firebase; 'factory' argument allows
				this method to call the getMoviesFromFirebase method
			*/
			postMovieToFirebase (object, factory) {
				$http.post(`${FB_URL}.json`, object)
					.then(factory.getMoviesFromFirebase);
			},
			/*
				DELETE from firebase; 'factory' argument allows
				this method to call the getMoviesFromFirebase method
			*/
			deleteMovieFromFirebase (id, factory) {
				$http.delete(`${FB_URL}/${id}.json`)
					.then(factory.getMoviesFromFirebase);

			},
			//added a 'getter' here to return the movies object to the controller. 
			getMoviesObject () {
				console.log("Movies in getMoviesObject", myMovies);
				return myMovies;
			}
		};

	}));
