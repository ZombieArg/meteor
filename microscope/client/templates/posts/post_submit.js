/**
 * Created by eduardopan on 7/16/17.
 */

Template.postSubmit.events({
    'submit form': function(e){
        e.preventDefault();

        var post = {
            url: $(e.target).find('[name=url]').val(),
            title: $(e.target).find('[name=title]').val()
        };

        var errors = validatePost(post);
        if (errors.title || errors.url)
            return Session.set('postSubmitErrors', errors);


        Meteor.call('postInsert', post, function (error, result) {
            //Display the error to the user and abort
            if(error)
                return Errors.throw(error.reason);

            //Show this result but route anyway
            if(result.postExists)
                Errors.throw('This link has been posted');


            Router.go('postPage', {_id: result._id});
        });
    }
});

Template.postSubmit.onCreated(function () {
    Session.set('postSubmitErrors', {});
});

Template.postSubmit.helpers({
    errorMessage: function (field) {
        return Session.get('postSubmitErrors')[field];
    },
    errorClass: function (field) {
        return !!Session.get('postSubmitErrors')[field] ? 'has-errors' : '';
    }
});