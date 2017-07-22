/**
 * Created by eduardopan on 7/19/17.
 */

Errors =  new Mongo.Collection(null);

throwError = function (message) {
    Errors.insert({message: message});
};