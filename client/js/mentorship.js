if (Meteor.isClient) {
  Template.mentorship.helpers({
    'getPosts': function() {
      return Posts.find().fetch();
    }
  });

  // Template.mentorship.onRendered(function() {
  //   this.$('.mas').masonry({
  //     itemSelector: ".mas-item",
  //     percentPosition: true,
  //     gutter: 0
  //   });
  // })
};