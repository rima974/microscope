Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {return Meteor.subscribe('posts');}
});

Router.route('/', {name:'postsList'});
Router.route('/posts/_id', {name:'postPage', data: function () { return Posts.findOne(this.params._id); }
});
// si quelqu'un entre une url de la forme http://localhost:3000/posts/xyz, où xyz n’estpas un _id valide d'article
Router.onBeforeAction('dataNotFound', {only: 'postPage'});
