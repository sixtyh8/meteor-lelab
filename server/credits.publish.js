'use strict'

Meteor.publish('credits', function(options, searchString) {
  var where = {
    'album': {
      '$regex': '.*' + (searchString || '') + '.*',
      '$options': 'i'
    }
  };
  Counts.publish(this, 'numberOfCredits', Credits.find(where), {noReady: true});
  return Credits.find(where, options);
});
