/**
 * Created by eduardopan on 7/19/17.
 */

Template.errors.helpers({
    errors: function () {
        return Errors.find();
    }
});