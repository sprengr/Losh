var authentication = (function(){
	var _ = require('underscore');
	var self = {};

	self.users = [{ user: 'admin', password: 'admin'}, 
				  { user: 'guest', password: 'guest'}];

	self.login = function(session, user, password){
		var validLogin = _.filter(self.users, function(u){
			return u.user === user && u.password === password;
		}).length > 0;
		session.isLoggedIn = validLogin;
	};

	self.isLoggedIn = function(session){
		return session.isLoggedIn;
	};

	return self;
}());

module.exports = {
	login : function(session, user, password){
		authentication.login(session, user, password);
	},
	isLoggedIn : function(session){
		authentication.isLoggedIn(session);
	}
};