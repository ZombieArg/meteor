/**
 * Created by eduardopan on 7/28/17.
 */

Notifications = new Mongo.Collection('notifications');

Notifications.allow({
    update: function (userId, doc, fieldNames) {
        return ownsDocument(userId, doc) &&
                fieldNames.length === 1 && fieldNames[0] === 'read';
        
    }
});

createCommentNotification = function (comment) {
    var post = Posts.findOne(comment.postId);

    if(comment.userId !==  post.userId){
        Notifications.insert({
            userId: post.userId,
            postId: post._id,
            commentId: comment.id,
            commenterName: comment.author,
            read: false
        });
    }
};