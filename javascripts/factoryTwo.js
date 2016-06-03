/*
Any controller that needs access to these methods
MUST include this factory ('moviePath') in its function arguments
*/

movieHunter.factory("moviePath", (function($http) {

		const FB_URL = "https://movie-hunter.firebaseio.com/movies";
		let myMovies;

		return {
			// GET from firebase
			getMoviesFromFirebase () {
				$http.get(`${FB_URL}.json`)
					.then(ret => {
							myMovies = ret.data;
							// controller3.getMovies(myMovies);
						}
					);
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
			getMoviesObject () {
				return myMovies;
			}
		};

	}));
