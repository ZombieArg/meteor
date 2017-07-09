/**
 * Created by eduardopan on 7/9/17.
 */
Meteor.publish('posts', function () {
   return Posts.find();
});