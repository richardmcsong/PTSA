Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('main', {path: "/"});
  this.route('mentorship', {path: "/mentorship"});
})