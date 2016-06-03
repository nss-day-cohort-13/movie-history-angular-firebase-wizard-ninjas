  "use strict";

movieHunter
.factory("factory1", function ($http)  {

  return {
    searchOMDb: (arg) => {
      $http.get(`http://www.omdbapi.com/?t=${arg}&r=json`)
        .then((response) => {

          // this is the api key of www.themoviedb.org
          const apiKey = "6fbcc4c8b7adb5d2e8362bd5b7157999";

          if( response.data.Error !== "Movie not found!" ) {

            // this whole GET method is for making an API call to themoviedb to return the first film by the name passed in
            $http.get(`http://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${arg}`)
              .then((posterResponse) => {
                const baseUrl = "http://image.tmdb.org/t/p";
                const size = "/w500";
                let posterImg = posterResponse.data.results[0].poster_path;
                let imgUrl = `${baseUrl}${size}${posterImg}`;

                console.log("imgUrl", imgUrl);

                let film = {
                  title: response.data.Title,
                  year: response.data.Year,
                  actors: response.data.Actors.split(", "), // This needs to be an array
                  rating: Math.floor(response.data.imdbRating), // This needs to be an int
                  watched: false,
                  poster: imgUrl //
                };
                  console.log("film = ", film);
              });

            } else {
              console.log("Movie not found!");
            }
          // controller2.
      });
    } 
  };
});