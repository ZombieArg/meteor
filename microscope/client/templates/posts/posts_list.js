/**
 * Created by eduardopan on 7/9/17.
 */

Template.postsList.helpers({
    posts: function () {
        return Posts.find();
    }
});