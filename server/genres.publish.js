'use strict'

Meteor.publish('genres', function(options, searchString) {
  var where = {
    'name': {
      '$regex': '.*' + (searchString || '') + '.*',
      '$options': 'i'
    }
  };
  Counts.publish(this, 'numberOfGenres', Genres.find(where), {noReady: true});
  return Genres.find(where, options);
});
