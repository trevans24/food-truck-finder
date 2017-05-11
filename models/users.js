var bcrypt = require('bcryptjs');

module.exports = function(sequelize, Sequelize){
	var Users = sequelize.define('users', {
		email: Sequelize.STRING,
		password: Sequelize.STRING
}, {
	instanceMethods: {
		comparePassword: function(password) {
			return bcypt.compareSync(password, this.password);
		}
	}
});

	Users.beforeCreate(function(user, options){
		var salt = bcrypt.genSaltSync(10);
		var hash = bcrypt.hashSync(user.password, salt);
		user.password = hash;
	});
	return Users;
};