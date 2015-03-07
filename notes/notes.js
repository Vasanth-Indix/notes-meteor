Notes = new Mongo.Collection("notes");

if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    notes: function(){
      return Notes.find({});
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
