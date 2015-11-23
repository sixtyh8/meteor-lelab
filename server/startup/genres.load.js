Meteor.startup(function() {
  if(Genres.find().count() === 0) {
    HTTP.call("GET", "http://api.lelabmastering.com/genres",
      function (error, result) {
        if (!error) {
          result.data.forEach(function(genre) {
            Genres.insert(genre);
          });
        }
      }
    );
  }
});