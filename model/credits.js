Credits = new Mongo.Collection('credits');

Credits.allow({
  insert: function(userId, credit) {
    return true;
  },
  update: function(userId, credit, fields, modifier) {
    return true;
  },
  remove: function(userId, credit) {
    return true;
  }
});