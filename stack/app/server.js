var GitHub = require('github-api');

//docs : http://github-tools.github.io/github/docs/3.1.0/User.html#listRepos

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
nortalle.listRepos(function(err, repos) {
    console.log('nombre de repos : ' + repos.length);
});