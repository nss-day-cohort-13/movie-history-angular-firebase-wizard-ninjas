let fakeSentObject = {
	"name": "Finding Nemo",
	"released": "2006",
	"cast": ["Gill", "Nemo"],
	"rating": 5,
	"watched": true
};


angular.module('movieHunter', [])
	.factory('moviePath', ($http) => {

		const FB_URL = 'https://movie-hunter.firebaseio.com';
		let myMovies;

		return {
		// GET from firebase
			getMovies () {
					$http.get(`${FB_URL}/movies.json`)
						.then(ret => {
								myMovies = ret.data;
								console.log("returned movies", myMovies);
							}
						)

			},
			postMovie (object, moviePath) {
				$http.post(`${FB_URL}/movies.json`, object)
					.then(moviePath.getMovies())
			}
		}
	})
	.controller('fakeController', (moviePath) => (
		moviePath.postMovie(fakeSentObject, moviePath)
	)

)
