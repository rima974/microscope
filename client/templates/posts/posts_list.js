//rendre la collection dynamique en supprimant le var postsData
Template.postsList.helpers({
  posts: function(){
    return Posts.find();
  }
});
