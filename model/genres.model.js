Genres = new Mongo.Collection('genres');

Genres.allow({
  insert: function(userId, genre) {
    return userId;
  },
  update: function(userId, genre, fields, modifier) {
    return userId;
  },
  remove: function(userId, genre) {
    return userId;
  }
});