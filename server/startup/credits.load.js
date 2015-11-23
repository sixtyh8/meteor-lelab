Meteor.startup(function() {
  if(Credits.find().count() === 0) {
	HTTP.call("GET", "http://api.lelabmastering.com/credits",
      	function (error, result) {
        	if (!error) {
        		result.data.forEach(function(credit) {
			  		Credits.insert(credit);
				});
        	}
    	}
    );
  }
});