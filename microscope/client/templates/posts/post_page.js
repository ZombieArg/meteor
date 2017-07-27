/**
 * Created by eduardopan on 7/27/17.
 */

Template.postPage.helpers({
    comments: function () {
        return Comments.find({postId: this._id});
    }
});
