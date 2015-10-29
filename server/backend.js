Posts = new Mongo.Collection("Posts");

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}