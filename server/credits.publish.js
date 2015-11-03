'use strict'

Meteor.publish('credits', function(options, searchString) {
  var where = {
  	$or: [
	    {
	    	'album': {
	      		'$regex': '.*' + (searchString || '') + '.*',
	      		'$options': 'i'
	    	}
		},
		{
	    	'artist': {
	      		'$regex': '.*' + (searchString || '') + '.*',
	      		'$options': 'i'
	    	}
		},
		{
	    	'genre': {
	      		'$regex': '.*' + (searchString || '') + '.*',
	      		'$options': 'i'
	    	}
		},
		{
	    	'year': {
	      		'$regex': '.*' + (searchString || '') + '.*',
	      		'$options': 'i'
	    	}
		},
	]
  };
  Counts.publish(this, 'numberOfCredits', Credits.find(where), {noReady: true});
  return Credits.find(where, options);
});
