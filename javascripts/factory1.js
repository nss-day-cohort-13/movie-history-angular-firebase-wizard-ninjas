  "use strict";

movieHunter
.factory("factory1", function ($http)  {

  return {
    searchOMDb: (arg) => {
      $http.get(`http://www.omdbapi.com/?t=${arg}&r=json`)
        .then((response) => {
          console.log("response", response);
      });
    } 
  };

});