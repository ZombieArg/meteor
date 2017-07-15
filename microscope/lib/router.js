/**
 * Created by eduardopan on 7/14/17.
 */
Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function(){ return Meteor.subscribe('posts');}
});

Router.route('/', {name:'postsList'});