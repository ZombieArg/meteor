/**
 * Created by eduardopan on 7/9/17.
 */

Posts = new Mongo.Collection('posts');

Posts.allow({
    insert: function (userId, doc) {
        //Only allow posting if you are logged in
        return !! userId;
    }
});