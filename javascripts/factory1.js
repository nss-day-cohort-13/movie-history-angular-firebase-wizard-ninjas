  "use strict";

movieHunter
.factory("factory1", function ($http)  {
  let film;

  return {
    searchOMDb: (arg) => {
      $http.get(`http://www.omdbapi.com/?t=${arg}&r=json`)
        .then((response) => {

          // actorArray = response.data.Actors.split(, );

          film = {
            title: response.data.Title,
            year: response.data.Year,
            actors: response.data.Actors.split(", "), // This needs to be an array
            rating: Math.floor(response.data.imdbRating), // This needs to be an int
            watched: false
          };
          console.log("film", film);

          // controller2.
          return film;

      });
    },
    getFilm: function() {
      console.log("I'm working");
      return film;
    }
  };
});