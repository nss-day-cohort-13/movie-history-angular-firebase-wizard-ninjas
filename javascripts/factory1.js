  "use strict";

movieHunter
.factory("factory1", function ($http)  {

  return {
    searchOMDb: (arg) => {
      $http.get(`http://www.omdbapi.com/?t=${arg}&r=json`)
        .then((response) => {

          if( response.data.Error != "Movie not found!") {

            let film = {
              title: response.data.Title,
              year: response.data.Year,
              actors: response.data.Actors.split(", "), // This needs to be an array
              rating: Math.floor(response.data.imdbRating), // This needs to be an int
              watched: false
            };

            console.log("film = ", film);

          } else {
            console.log("Movie not found!")
          }

          // controller2.
      });
    } 
  };
});