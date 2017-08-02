/**
 * Created by eduardopan on 8/2/17.
 */

Template.registerHelper('pluralize', function (n, thing) {

    if(n === 1){
        return '1 ' + thing;
    } else {
        return n + ' ' + thing + 's';
    }
});