var GitHub = require('github-api');

// basic auth
var gh = new GitHub({
    username: '',
    password: ''

});

var me = gh.getUser(); // no user specified defaults to the user for whom credentials were provided
me.listNotifications(function(err, notifications) {
    console.log(notifications);
});

var nortalle = gh.getUser('nortalle');
nortalle
nortalle.listRepos(function(err, repos) {
    console.log('nombre de repos : ' + repos.length);
});