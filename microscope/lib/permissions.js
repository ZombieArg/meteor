/**
 * Created by eduardopan on 7/19/17.
 */

// check that the userId specified owns the documents
ownsDocument = function (userId, doc) {
    return doc && doc.userId === userId;
};
